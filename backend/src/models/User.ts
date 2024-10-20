import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    email: string,
    name: string,
    isLogged: boolean,
    password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UsersSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "O e-mail é obrigatório"],
        maxlength: [50, "O e-mail deve ter no máximo 50 caracteres"],
        validate: {
            validator: function (value: string) {
                return emailRegex.test(value);
            },
            message: "O e-mail informado não é válido"
        }
    },
    password: {
        type: String,
        trim: true,
        required: [true, "A senha é obrigatória"],
        maxlength: [100, "A senha deve ter no máximo 100 caracteres"]
    },
    name: {
        type: String,
        trim: true,
        required: [true, "O nome é obrigatório"],
        maxlength: [100, "O nomne deve ter no máximo 100 caracteres"]
    },
    isLogged: {
        type: Boolean,
        trim: true,
        required: true
    }
}
);

const User = mongoose.model("User", UsersSchema);

export default User
