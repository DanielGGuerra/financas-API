import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import HttpRequestError from "../../err/HttpRequestError";
import UsersRepository from "../repositories/UsersRepository";
import { compare } from 'bcrypt';

interface IAuthUser {
    email: string;
    password: string;
    token?: Itoken;
}

interface Itoken {
    id: string;
    token: string;
}

class AuthUserService {
    public async execute({ email, password }: IAuthUser): Promise<Itoken> {
        const usersRepositories = getCustomRepository(UsersRepository);

        const user = await usersRepositories.findByEmail(email);

        if(!user) {
            throw new HttpRequestError({
                status: 400,
                name: 'AutenticacaoError',
                message: 'Email/senha invalido'
            });
        }

        if(!await compare(password, user.password)){
            throw new HttpRequestError({
                status: 400,
                name: 'AutenticacaoError',
                message: 'Email/senha invalido'
            });
        }

        const token = sign(
            {
                email,
            },
                '3d0f3b9ddcacec30c4008c5e030e6c13a478cb4f',
            {
                subject: user.id,
                expiresIn: '1d',
            }
        ); 

        return { id: user.id, token }
    }
}

export default AuthUserService;