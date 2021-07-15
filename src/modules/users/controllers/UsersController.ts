import { Request, Response } from "express";
import { Repository } from "typeorm";
import CreateUserService from "../services/CreateUserService";
import ListUsersService from "../services/ListUsersService";

export default class UsersController {
    public async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userService = new CreateUserService();

        const user = userService.execute({
            name,
            email,
            password,
        });

        return response.status(200).json(user);
    }

    public async listUsers(request: Request, response: Response) {
        const userService = new ListUsersService();

        const users = await userService.execute();

        return response.status(200).json(users);
    }
}