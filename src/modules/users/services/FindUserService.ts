import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

export default class FindUserService {
    public async execute(id: string): Promise<User | undefined> {
        const userRepositories = getCustomRepository(UsersRepository);

        const user = await userRepositories.findOne({id});

        if(!user) {
            throw new HttpRequestError({
                status: 400,
                name: 'PesquisaError',
                message: 'Cadastro de usuario não existe.'
            });
        }

        return user;
    }
}