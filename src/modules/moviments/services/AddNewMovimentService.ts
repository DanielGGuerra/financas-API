import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import UsersRepository from "../../users/repositories/UsersRepository";
import { Moviment } from "../entities/Moviment";
import { MovimentsRepositories } from "../repositories/MovimentsRepositories";
import { isAfter } from 'date-fns';

interface IMoviment {
    user_id: string;
    isEntrance: boolean;
    value: number;
    description: string;
    date_moviment: Date;
}

export class AddNewMovimentService {
    public async execute(
        {
            user_id,
            isEntrance,
            value,
            description,
            date_moviment,
        }: IMoviment
    ): Promise<Moviment> {
        
        const usersRepositories = getCustomRepository(UsersRepository);

        const user = await usersRepositories.findOne({
            where: {
                id: user_id
            }
        });

        if(!user) {
            throw new HttpRequestError({
                status: 400,
                name: 'MovimentError',
                message: 'Usuario não encontrado'
            });
        }

        const movimentsRepositories = getCustomRepository(MovimentsRepositories);
        
        if(!isEntrance) {
            user.balance =- value;
        } else {
            user.balance =+ value;
        }

        const dateNow = Date.now();

        if(isAfter(date_moviment, dateNow)){
            throw new HttpRequestError({
                status: 400,
                name: 'MovimentError',
                message: 'A data de movimento é superior a data atual'
            });
        }

        const moviment = movimentsRepositories.create({
            user_id,
            isEntrance,
            value,
            description,
            date_moviment,
        });

        await usersRepositories.save(user);
        await movimentsRepositories.save(moviment);

        return moviment;
    }
}