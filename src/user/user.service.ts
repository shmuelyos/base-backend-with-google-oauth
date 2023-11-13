// user.service.ts
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.model";

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) {
    }

    async findOrCreate(user: User): Promise<User> {

        const existingUser = await this.findByEmail(user.email);

        if (!existingUser) {
            return await this.create(user)
        }
        console.log('this user:', user.email, 'already exists in the DB.')
        return existingUser;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email}).exec();
    }

    private async create(user: User): Promise<User> {

        const newUser = new this.userModel(user);
        await newUser.save();
        console.log('a new user has been created:', JSON.stringify(newUser, null, 4))
        return newUser;
    }
}
