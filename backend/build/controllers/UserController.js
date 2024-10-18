"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { email, password, name, isLogged } = req.body;
            try {
                const response = yield User_1.default.create({
                    email,
                    password,
                    name,
                    isLogged
                });
                res.send(response);
            }
            catch (e) {
                if (e.code === 11000) {
                    res.send({ message: `O e-mail ${email} já está em uso` });
                }
                else if ((_a = e.errors) === null || _a === void 0 ? void 0 : _a.mail) {
                    res.send({ message: e.errors.mail.message });
                }
                else {
                    res.send({ message: e });
                }
            }
        });
    }
    list(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield User_1.default.find());
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const response = yield User_1.default.findByIdAndDelete(id);
            if (response) {
                res.json(response);
            }
            else {
                res.json({ message: "Registro inexistente" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { id, name, email, password, isLogged } = req.body;
            try {
                const response = yield User_1.default.findByIdAndUpdate(id, { email, name, password, isLogged }, {
                    new: true,
                    runValidators: true,
                });
                if (response) {
                    res.json(response);
                }
                else {
                    res.json({ message: "Registro inexistente" });
                }
            }
            catch (e) {
                if (e.code === 11000) {
                    res.send({ message: `O e-mail ${email} já está em uso` });
                }
                else if ((_a = e.errors) === null || _a === void 0 ? void 0 : _a.email) {
                    res.send({ message: e.errors.mail.message });
                }
                else {
                    res.send({ message: e });
                }
            }
        });
    }
}
exports.default = new UsersController();
