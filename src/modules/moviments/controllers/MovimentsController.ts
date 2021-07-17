import { Request, Response } from "express";
import { AddNewMovimentService } from "../services/AddNewMovimentService";

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
}