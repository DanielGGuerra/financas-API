import 'express-async-errors';
import express, { Request, Response } from 'express';
import "reflect-metadata";
import './infrastruture/database';
import router from './routes';
import errorMiddleware from './modules/middlewares/ErrorMiddleware';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(3333, () => console.log('Server is runner on port 3333'));