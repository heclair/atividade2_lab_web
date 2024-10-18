import mongoose, { Schema, Document } from "mongoose";

interface ISubSubTarefa extends Document {
    subTarefaModelId: mongoose.Types.ObjectId;
    nomeTarefa: string;
    descricao: string;
    dataCriacao: Date;
    dataVencimento: Date;
    prioridade: string;
    status: string;
}

const SubSubTarefaSchema: Schema<ISubSubTarefa> = new Schema({
    subTarefaModelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTarefa",
        required: true
    },
    nomeTarefa: {
        type: String,
        required: [true, "O nome da subtarefa é obrigatório"],
        maxlength: [100, "O nome da subtarefa deve ter no máximo 100 caracteres"],
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

    },
    status: {
        type: String,

    }
});

const SubSubTarefa = mongoose.model<ISubSubTarefa>("SubSubTarefa", SubSubTarefaSchema);

export default SubSubTarefa;
export { ISubSubTarefa };
