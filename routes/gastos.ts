import { Router } from "express";
import { getGastos, getGastosDni, CrearGastos } from "../controllers/gastos";

const gastosRoutes = Router();

gastosRoutes.get("/", getGastos);

gastosRoutes.get("/:dni", getGastosDni);

gastosRoutes.post("/", CrearGastos);

export default gastosRoutes;
