"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UsersSchema = new mongoose_1.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "O e-mail é obrigatório"],
        maxlength: [50, "O e-mail deve ter no máximo 50 caracteres"],
        validate: {
            validator: function (value) {
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
});
const User = mongoose_1.default.model("User", UsersSchema);
exports.default = User;
