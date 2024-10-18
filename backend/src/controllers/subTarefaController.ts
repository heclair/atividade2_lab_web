import { Request, Response } from "express";

import moment from "moment";
import { ListaTarefa } from "../models";

class SubTarefaController {
    public async update(req: Request, res: Response): Promise<void> {
        console.log('Dados recebidos sub tarefa:', req.body);

        // Desestruturar os dados recebidos
        const {
            listaid,
            nomeTarefa,
            descricao,
            prioridade,
            status,
            subtarefa
        } = req.body;

        const data = moment().format("YYYY-MM-DD");
        const dataVencimento = moment().format("YYYY-MM-DD");

        try {
            // Criar a nova subtarefa
            const novaSubTarefa = ({
                listaid,
                nomeTarefa,
                data,
                descricao,
                dataVencimento,
                prioridade,
                status,
                subtarefa
            });

            // Adicionar a nova subtarefa ao array de tarefas da ListaTarefa
            await ListaTarefa.updateOne(
                { _id: listaid },
                { $push: { tarefas: novaSubTarefa }} // Adiciona o ID da nova subtarefa
            );

            res.status(201).json(novaSubTarefa);
        } catch (e: any) {
            console.error(e);
            if (e.code === 11000) {
                res.status(400).json({ message: `A tarefa com o título "${nomeTarefa}" já existe.` });
            } else {
                res.status(500).json({ message: "Erro interno do servidor" });
            }
        }
    }
}

export default new SubTarefaController();
