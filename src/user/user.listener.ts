// user.listener.ts
import { OnEvent } from '@nestjs/event-emitter';
import {UserService} from "./user.service";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserListener {
    constructor(private userService: UserService) {}

    @OnEvent('session.created')
    async handleSessionCreatedEvent(payload: any) {
        const { email,
            firstName,
            lastName,
            picture,
            accessToken,
            refreshToken } = payload;
        // Here, use UserService to find or create a user based on the email
        const user = await this.userService.findOrCreate({
            email,
            firstName,
            lastName,
            picture,
            accessToken,
            refreshToken });

        console.log(`~~~~~~~~ created/found user ~~~~~~~ =`, JSON.stringify(user, null, 4))

    }
}
