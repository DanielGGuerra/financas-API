import { Router } from "express";
import enseureAuth from "../../middlewares/ensureAtuh";
import UsersController from "../controllers/UsersController";

const userRouter = Router();

const userController = new UsersController();

userRouter.get('/', userController.listUsers);
userRouter.post('/', userController.create);
userRouter.get('/:id', userController.findUser);
userRouter.patch('/', enseureAuth, userController.alter);

export default userRouter;