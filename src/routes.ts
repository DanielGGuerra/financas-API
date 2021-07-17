import { Router } from "express";
import enseureAuth from "./modules/middlewares/ensureAtuh";
import movimentRoutes from "./modules/moviments/routes/moviments.routes";
import userRouter from "./modules/users/routes/user.routes";
import userAuthRouter from "./modules/users/routes/userAuth.routes";
const router = Router();

router.use('/users', userRouter);
router.use('/auth', userAuthRouter);
router.use(
    '/moviments', 
    enseureAuth, 
    movimentRoutes
    );

export default router;