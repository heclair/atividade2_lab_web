import { Request, Response } from "express";
import { ListaTarefa } from "../models"; // Certifique-se de importar o modelo ListaTarefa
import moment from "moment";

class SubSubTarefaController {
    public async update(req: Request, res: Response): Promise<void> {
        console.log('Dados recebidos para criar sub-subtarefa:', req.body);

        // Desestruturar os dados recebidos
        const {
            listaid, // ID da lista onde a subtarefa está
            tarefaId, // ID da subtarefa onde a sub-subtarefa será adicionada
            nomeTarefa,
            descricao,
            prioridade,
            status
        } = req.body;

        const dataCriacao = moment().format("YYYY-MM-DD");
        const dataVencimento = moment().format("YYYY-MM-DD"); // Se aplicável

        // Criar a nova sub-subtarefa
        const novaSubSubTarefa = {
            nomeTarefa,
            descricao,
            dataCriacao,
            dataVencimento,
            prioridade,
            status
        };

        try {
            // Atualizar a ListaTarefa, adicionando a nova sub-subtarefa ao array de tarefas da subtarefa correspondente
            const result = await ListaTarefa.updateOne(
                { _id: listaid, "tarefas._id": tarefaId }, // Filtra pela lista e pela subtarefa
                { $push: { "tarefas.$.tarefas": novaSubSubTarefa } } // Adiciona ao array de tarefas da subtarefa
            );

            // Log para verificar o resultado da operação
            console.log('Resultado da atualização:', result);

            if (result.modifiedCount === 0) {
                res.status(404).json({ message: "Subtarefa não encontrada ou não modificada." });
            }

            // Resposta com a nova sub-subtarefa
            res.status(201).json(novaSubSubTarefa);
        } catch (e: any) {
            console.error('Erro ao atualizar a sub-subtarefa:', e);
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}

export default new SubSubTarefaController();
