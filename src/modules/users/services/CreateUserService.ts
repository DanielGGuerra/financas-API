import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

interface IUser {
    name: string;
    email: string;
    password: string
}

export default class CreateUserService {
    public async execute({ name, email, password}: IUser): Promise<IUser> {
        const usersRepositories = new UsersRepository();

        const userExists = await usersRepositories.findByEmail(email);

        if(userExists) {
            throw new Error('Já existe um cadastro com este email.');
        }

        const user = usersRepositories.create({
            name,
            email,
            password,
        });

        await usersRepositories.save(user);

        return user;
    }
}