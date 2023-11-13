import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {GoogleStrategy} from './google.strategy';
import {SessionSerializer} from '../session/session.serializer';
import {GoogleController} from "./google.controller";


@Module({
    imports: [PassportModule.register({session: true}),],
    controllers: [GoogleController],
    providers: [GoogleStrategy, SessionSerializer],
})
export class GoogleModule {
}
