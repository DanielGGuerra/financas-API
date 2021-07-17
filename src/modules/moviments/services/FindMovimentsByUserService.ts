import { Between, getCustomRepository } from "typeorm";
import { Moviment } from "../entities/Moviment";
import { MovimentsRepositories } from "../repositories/MovimentsRepositories";

interface FindMovimentsByUser {
    user_id: string;
    start: Date;
    final: Date;
}

export class FindMovimentsByUserService {
    public async execute({
            user_id,
            start,
            final
        }: FindMovimentsByUser
    ): Promise<Moviment[]> {
        const movimentsRepositories = getCustomRepository(MovimentsRepositories);

        const moviments = await movimentsRepositories.find({
            where: {
                user_id,
                date_moviment: Between(start, final),
            }         
        });
        
        return moviments;
    }
}