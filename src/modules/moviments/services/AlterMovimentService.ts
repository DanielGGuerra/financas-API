import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import UsersRepository from "../../users/repositories/UsersRepository";
import { Moviment } from "../entities/Moviment";
import { MovimentsRepositories } from "../repositories/MovimentsRepositories";

interface IMoviment {
    id: string;
    value?: number;
    data_movimento?: Date;
    description?: string;
    isEntrance?: boolean
}

export class AlterMovimentService {
    public async execute(movimentParam: IMoviment): Promise<Moviment> {
        const movimentsRepositories = getCustomRepository(MovimentsRepositories);

        const moviment = await movimentsRepositories.findOne({
            where: {
                id: movimentParam.id,
            }
        });

        if(!moviment) {
            throw new HttpRequestError({
                status: 400,
                name: 'AlterError',
                message: 'Movimento não encontrado'
            });
        }

        if(movimentParam.value) {
            const usersRepositories = getCustomRepository(UsersRepository);
            const user = await usersRepositories.findOne(moviment.user_id);
            
            if(!user) {
                throw new HttpRequestError({
                    status: 400,
                    name: 'AlterMovimentError',
                    message: 'Usuario não encontrado'
                });
            }
            
            let balance = user.balance;

            if(moviment.isEntrance) {
                balance = balance - moviment.value;
                balance = balance + movimentParam.value;
            } else {
                balance = balance + moviment.value;
                balance = balance - movimentParam.value;
            }

            if(balance < 0) {
                throw new HttpRequestError({
                    status: 400,
                    name: 'AlterMovimentError',
                    message: 'Valor informado maior que o saldo do cliente'
                });
            }

            user.balance = balance;

            await usersRepositories.save(user);
        }

        if(movimentParam.isEntrance) {
            throw new HttpRequestError({
                status: 400,
                name: 'AlterMovimentError',
                message: 'Não é permitido trocar o tipo de movimento'
            })
        }

        const newMoviment = Object.assign(moviment, movimentParam);

        await movimentsRepositories.save(newMoviment);

        return newMoviment;
    }
}