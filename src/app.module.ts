import {Module} from '@nestjs/common';
import {GoogleModule} from "./google/google.module";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {EventEmitterModule} from "@nestjs/event-emitter";
import {UserModule} from "./user/user.module";


@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URL),
        PassportModule.register({session: true}),
        EventEmitterModule.forRoot(),
        GoogleModule, UserModule
    ]
})
export class AppModule {
}
