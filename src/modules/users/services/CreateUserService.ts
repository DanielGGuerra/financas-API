import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";
import { hash } from 'bcrypt'

interface IUser {
    name: string;
    email: string;
    password: string
}

export default class CreateUserService {
    public async execute({ name, email, password}: IUser): Promise<User> {
        const usersRepositories = getCustomRepository(UsersRepository);

        const userExists = await usersRepositories.findByEmail(email);

        if(userExists) {
            throw new  HttpRequestError({
                status: 400,
                name: 'CadastroError',
                message: 'Existe outro cadastro com email informado'
            });
        }
        
        const pwHash = await hash(password, 10)

        const user = usersRepositories.create({
            name,
            email,
            password: pwHash,
        });

        await usersRepositories.save(user);

        return user;
    }
}