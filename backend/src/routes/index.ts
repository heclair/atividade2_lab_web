import { Router } from "express";
import user from "./user";
import listaTarefa from "./listaTarefa";
import SubTarefa from "./SubTarefa"
import SubSubTarefa  from "./SubTarefa";

const router = Router();

router.use("/user", user);
router.use("/", listaTarefa)
router.use("/", SubTarefa)
router.use("/", SubSubTarefa)

export default router;