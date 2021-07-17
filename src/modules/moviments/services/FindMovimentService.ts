import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import { Moviment } from "../entities/Moviment";
import { MovimentsRepositories } from "../repositories/MovimentsRepositories";

export class FindMovimentService {
    public async execute(id: string): Promise<Moviment> {
        const movimentsRepositories = getCustomRepository(MovimentsRepositories);

        const moviment = await movimentsRepositories.findOne({
            where: {
                id
            }
        });

        if(!moviment) {
            throw new HttpRequestError({
                status: 400,
                name: 'FindMovimentError',
                message: 'Movimento não encontrado'
            });
        }

        return moviment;

    }
}