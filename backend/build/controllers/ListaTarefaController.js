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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class ListaTarefaController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, nomeLista, tarefas } = req.body;
                if (!userId || !nomeLista) {
                    return res.status(400).json({ message: "userId e nomeLista são obrigatórios." });
                }
                const novaLista = new models_1.ListaTarefa({ userId, nomeLista, tarefas });
                yield novaLista.save();
                return res.status(201).json(novaLista);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao criar a lista de tarefas.", error });
            }
        });
    }
}
exports.default = new ListaTarefaController();
