"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = (0, express_1.Router)();
router.get("/", UserController_1.default.list);
router.post("/", UserController_1.default.create);
router.delete("/", UserController_1.default.delete);
router.put("/", UserController_1.default.update);
exports.default = router;
