import {Strategy} from 'passport-google-oauth20';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private eventEmitter: EventEmitter2) {

        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

        super({
            clientID:
            process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${protocol}://${process.env.BASE_URL}:${process.env.PORT}/google/redirect`,
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        if (!profile?.emails?.length) {
            throw new UnauthorizedException('No email found from Google login');
        }

        // Extract additional user information from the profile
        const email = profile.emails[0].value;
        const firstName = profile.name?.givenName;
        const lastName = profile.name?.familyName;
        const picture = profile.photos[0]?.value;

        // Emit the event with all necessary information
        this.eventEmitter.emit('session.created', {
            email,
            firstName,
            lastName,
            picture,
            accessToken,
            refreshToken
        });

        return { email };
    }

}
