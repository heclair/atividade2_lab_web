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
class SubSubTarefaController {
    // Método para criar uma nova SubSubTarefa
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { subTarefaModelId, nomeTarefa, descricao, dataVencimento, prioridade, status } = req.body;
                // Validar se os dados necessários foram enviados
                if (!subTarefaModelId || !nomeTarefa) {
                    return res.status(400).json({ message: "subTarefaModelId e nomeTarefa são obrigatórios" });
                }
                // Criar a nova SubSubTarefa
                const novaSubSubTarefa = yield models_1.SubSubTarefa.create({
                    subTarefaModelId,
                    nomeTarefa,
                    descricao,
                    dataCriacao: new Date(),
                    dataVencimento,
                    prioridade,
                    status
                });
                return res.status(201).json(novaSubSubTarefa);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao criar a SubSubTarefa", error: error.message });
            }
        });
    }
}
exports.default = new SubSubTarefaController();
