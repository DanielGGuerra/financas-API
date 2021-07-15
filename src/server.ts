import express from 'express';
import "reflect-metadata";
import './infrastruture/database';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Server online"
    });
});

app.listen(3333, () => console.log('Server is runner on port 3333'));