import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import FindUserService from "../services/FindUserService";
import ListUsersService from "../services/ListUsersService";

export default class UsersController {
    public async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userService = new CreateUserService();

        const user = await userService.execute({
            name,
            email,
            password,
        });

        return response.status(200).json({user});
    }

    public async listUsers(request: Request, response: Response) {
        const userService = new ListUsersService();

        const users = await userService.execute();

        return response.status(200).json(users);
    }

    public async findUser(request: Request, response: Response) {
        const { id } = request.params;
        
        const findUserService = new FindUserService();

        const user = await findUserService.execute(id);

        return response.status(200).json(user);
    }
}