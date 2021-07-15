import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

export default class ListUsersService {
    public async execute(): Promise<User[]>{
        const usersRepositories = getCustomRepository(UsersRepository);

        const users = usersRepositories.find();

        return users;
    }
}