import { Schema, model } from "mongoose";

const User = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
});

const UserModel = model("UserDemo", User);

export default UserModel;
