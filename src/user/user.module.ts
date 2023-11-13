// user.module.ts
import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./user.model";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {UserListener} from "./user.listener";

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService,UserListener],
})
export class UserModule {
}
