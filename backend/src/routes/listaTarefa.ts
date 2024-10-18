import { Router } from "express";
import { ListaTarefaController } from "../controllers"; // Certifique-se que esta importação está correta

const router = Router();

// Rota para criar uma nova lista de tarefas
router.post("/", ListaTarefaController.create);

export default router;
