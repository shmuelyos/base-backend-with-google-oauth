// user.model.ts
import mongoose from "mongoose";

export interface User {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    accessToken: string;
    refreshToken: string;
}

export const UserSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    picture: String,
    accessToken: String,
    refreshToken: String
});
