import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

class FindUserService {
    public async execute(id: string): Promise<User | undefined> {
        const userRepositories = getCustomRepository(UsersRepository);

        const user = await userRepositories.findOne({id});

        return user;
    }
}