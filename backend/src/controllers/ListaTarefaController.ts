import { Request, Response } from "express";
import { ListaTarefa } from "../models";


class ListaTarefaController {
  // Método para criar uma nova tarefa
  public async create(req: Request, res: Response): Promise<void> {
    console.log('Dados recebidos:', req.body)
    const { tarefas, nomeLista, userId } = req.body; // Ajuste os campos conforme sua estrutura

    try {
      const response = await ListaTarefa.create({ tarefas, nomeLista, userId });
      
      res.status(201).json(response); // Código 201 para criação
    } catch (e: any) {
      console.error(e);
      if (e.code === 11000) {
        res.status(400).json({ message: `A tarefa com o título "${tarefas}" já existe.` });
      } else {
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  }

}

export default new ListaTarefaController();
