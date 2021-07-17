import { Between, getCustomRepository } from "typeorm";
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
    ) {
        const movimentsRepositories = getCustomRepository(MovimentsRepositories);

        const moviments = await movimentsRepositories.find({
            where: [
                {
                    user_id,
                },
                Between(start, final),
            ],          
        });

    }
}