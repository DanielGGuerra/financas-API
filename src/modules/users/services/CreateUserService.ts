import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

class CreateUserService {
    public async execute(user: User): Promise<User> {
        const usersRepositories = new UsersRepository();

        const userExists = await usersRepositories.findByEmail(user.email);

        if(userExists) {
            throw new Error('Já existe um cadastro com este email.');
        }

        const newUser = usersRepositories.create(user);

        await usersRepositories.save(newUser);

        return user;
    }
}