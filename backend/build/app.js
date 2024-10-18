"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const connections_1 = require("./database/connections");
dotenv_1.default.config();
const app = (0, express_1.default)(); // cria o servidor e coloca na variável app
// suportar parâmetros JSON no body da requisição
app.use(express_1.default.json());
// configura o servidor para receber requisições de qualquer domínio
app.use((0, cors_1.default)());
(0, connections_1.connect)();
// define a rota para o pacote /routes
app.use(routes_1.default);
exports.default = app;
