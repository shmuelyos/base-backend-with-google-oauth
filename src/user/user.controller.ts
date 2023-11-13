// user.controller.ts
import {Body, Controller, Delete, Get, Post, Req} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.model";

@Controller("users")
export class UserController {
    constructor(private readonly usersService: UserService) {
    }

    @Post()
    async createUser(@Body() user: User) {
        return this.usersService.findOrCreate(user)
    }

    @Get('get-user')
    async getUser(@Req() req) {
        console.log("req.sessionID =", req.sessionID, "req.session =", JSON.stringify(req.session, null, 4))
        return await this.usersService.findByEmail(req.session.email || req.session.passport?.user)
    }

    @Delete('close-session')
    async closeSession(@Req() req) {
        return await req.session.destroy()
    }
}
