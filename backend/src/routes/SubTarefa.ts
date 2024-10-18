import { Router } from "express";
import { SubTarefaController } from "../controllers"; 


const router = Router();

// Rota para criar uma nova lista de tarefas
//router.post("/", SubTarefaController.create);
router.post("/", SubTarefaController.update);

export default router;
