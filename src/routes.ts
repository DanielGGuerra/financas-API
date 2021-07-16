import { Router } from "express";
import userRouter from "./modules/users/routes/user.routes";
import userAuthRouter from "./modules/users/routes/userAuth.routes";
const router = Router();

router.use('/users', userRouter);
router.use('/auth', userAuthRouter);

export default router;