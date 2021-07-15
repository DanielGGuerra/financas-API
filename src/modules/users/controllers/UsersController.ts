import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

class UsersController {
    public async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userService = new CreateUserService();

        const user = userService.execute({
            name,
            email,
            password,
        });
    }
}