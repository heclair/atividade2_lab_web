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
class SubTarefaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { listaid, nomeTarefa, descricao, dataVencimento, prioridade, status } = req.body;
                // Validar se os dados necessários foram enviados
                if (!listaid || !nomeTarefa) {
                    return res.status(400).json({ message: "listaid e nomeTarefa são obrigatórios" });
                }
                // Criar a nova subtarefa
                const novaSubTarefa = yield models_1.SubTarefa.create({ listaid, nomeTarefa, descricao, dataVencimento, prioridade, status });
                return res.status(201).json(novaSubTarefa);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao criar a subtarefa", error: error.message });
            }
        });
    }
}
exports.default = new SubTarefaController();
