"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListaTarefaController_1 = __importDefault(require("../controllers/ListaTarefaController"));
const router = (0, express_1.Router)();
// Rota para criar uma nova lista de tarefas
router.post("/", ListaTarefaController_1.default.create);
exports.default = router;
