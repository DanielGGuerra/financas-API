import { Router } from "express";
import UsersAuthController from "../controllers/UsersAuthController";

const userAuthRouter = Router();

const userAuthController = new UsersAuthController();

userAuthRouter.post('/', userAuthController.create);

export default userAuthRouter;