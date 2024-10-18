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
const SubTarefaSchema = new mongoose_1.Schema({
    listaid: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ListaTarefa",
        required: true
    },
    nomeTarefa: {
        type: String,
        required: [true, "O nome da tarefa é obrigatório"],
        maxlength: [100, "O nome da tarefa deve ter no máximo 100 caracteres"],
        trim: true
    },
    descricao: {
        type: String,
        maxlength: [500, "A descrição deve ter no máximo 500 caracteres"],
        trim: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    dataVencimento: {
        type: Date
    },
    prioridade: {
        type: String,
        enum: ["baixa", "média", "alta"],
        default: "baixa"
    },
    status: {
        type: String,
        enum: ["pendente", "em andamento", "concluída"],
        default: "pendente"
    },
    subtarefa: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "SubSubTarefa"
        }]
});
const SubTarefa = mongoose_1.default.model("SubTarefa", SubTarefaSchema);
exports.default = SubTarefa;
