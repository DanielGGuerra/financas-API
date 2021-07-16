import { Router } from "express";
import enseureAuth from "../../middlewares/ensureAtuh";
import UsersAuthController from "../controllers/UsersAuthController";

const userAuthRouter = Router();

const userAuthController = new UsersAuthController();

userAuthRouter.post('/', userAuthController.create);
userAuthRouter.post(
    '/reset', 
    enseureAuth,
    userAuthController.reset
    );

export default userAuthRouter;