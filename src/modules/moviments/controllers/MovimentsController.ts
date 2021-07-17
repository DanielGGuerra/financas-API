import { Request, Response } from "express";
import { AddNewMovimentService } from "../services/AddNewMovimentService";
import { FindMovimentsByUserService } from "../services/FindMovimentsByUserService";
import { FindMovimentService } from "../services/FindMovimentService";

export class MovimentsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { 
            user_id,
            isEntrance,
            value,
            description,
            date_moviment, 
        } = request.body;

        const addMovimentService = new AddNewMovimentService();

        const moviment = await addMovimentService.execute({
            user_id,
            isEntrance,
            value,
            description,
            date_moviment,
        });

        return response.status(200).json(moviment);
    }

    public async find(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

         const findMoviment = new FindMovimentService();

         const moviment = await findMoviment.execute(id);

         return response.status(200).json(moviment);
    }

    public async findByUser(request: Request, response: Response): Promise<Response> {
        const { user_id, start, final } = request.body;

        const findMoviments = new FindMovimentsByUserService();
        
        const moviments = await findMoviments.execute({
            user_id,
            start,
            final
        });

        return response.status(200).json(moviments);
    }
}