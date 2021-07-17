import { Router } from "express";
import { MovimentsController } from "../controllers/MovimentsController";

const movimentRoutes = Router();

const movimentsController = new MovimentsController();

movimentRoutes.post('/', movimentsController.create);
movimentRoutes.get('/find/:id', movimentsController.find);
movimentRoutes.post('/find', movimentsController.findByUser);

export default movimentRoutes;