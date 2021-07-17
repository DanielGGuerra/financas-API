import { Router } from "express";
import { MovimentsController } from "../controllers/MovimentsController";

const movimentRoutes = Router();

const movimentsController = new MovimentsController();

movimentRoutes.post('/', movimentsController.create);

export default movimentRoutes;