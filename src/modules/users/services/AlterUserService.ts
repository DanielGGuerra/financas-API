import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

interface IUser {
    id: string;
    name?: string;
    email?: string;
    password?: string;
}

class AlterUserService {
    public async execute(userParams: IUser): Promise<User> {
        const usersRepositories = getCustomRepository(UsersRepository);

        const user = await usersRepositories.findOne({
            where: {
                id: userParams.id,
            }
        });

        if(!user) {
            throw new HttpRequestError({
                status: 400,
                name: 'AlterUserErro',
                message: 'Usuario não encontrado'
            });
        }

        const userAlter = Object.assign(user, userParams);

        await usersRepositories.save(userAlter);

        return userAlter;
    }
}