import { Router } from "express";
import user from "./user";
import listaTarefa from "./listaTarefa";
import SubTarefa from "./SubTarefa"
import SubSubTarefa  from "./SubSubTarefa";

const router = Router();

router.use("/user", user);
router.use("/lista", listaTarefa)
router.use("/", SubTarefa)
router.use("/", SubSubTarefa)

export default router;