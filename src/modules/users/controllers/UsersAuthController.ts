import { Request, Response } from "express";
import AuthUserService from "../services/AuthUserService";

export default class UsersAuthController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authService = new AuthUserService();

        const userToken = await authService.execute({ email, password });

        return response.status(200).json(userToken);
    }
}