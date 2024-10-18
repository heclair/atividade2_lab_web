"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const listaTarefa_1 = __importDefault(require("./listaTarefa"));
const router = (0, express_1.Router)();
router.use("/user", user_1.default);
router.use("./lista", listaTarefa_1.default);
exports.default = router;
