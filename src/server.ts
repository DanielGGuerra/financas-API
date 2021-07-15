import express from 'express';
import "reflect-metadata";
import './infrastruture/database';
import 'express-async-errors';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is runner on port 3333'));