import { Router } from "express";
import UsersController from "../controllers/UsersController";

const userRouter = Router();

const userController = new UsersController();

userRouter.get('/', userController.listUsers);
userRouter.post('/', userController.create);

export default userRouter;