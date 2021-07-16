import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import UsersRepository from "../repositories/UsersRepository";
import { hash } from "bcrypt";

export default class ResetPasswordUserService {
    public async execute(email: string, newPassword: string): Promise<void> {
        const usersRepositories = getCustomRepository(UsersRepository);

        const user = await usersRepositories.findByEmail(email);

        if(!user) {
            throw new HttpRequestError({
                status: 400,
                name: 'CadastroError',
                message: 'Email não encontrado na base de dados'
            });
        }

        user.password = await hash(newPassword, 10);

        await usersRepositories.save(user);
    }
}