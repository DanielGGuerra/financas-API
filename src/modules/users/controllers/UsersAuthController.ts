import { Request, Response } from "express";
import AuthUserService from "../services/AuthUserService";
import ResetPasswordUserService from "../services/ResetPasswordUserService";

export default class UsersAuthController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authService = new AuthUserService();

        const userToken = await authService.execute({ email, password });

        return response.status(200).json(userToken);
    }

    public async reset(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authService = new ResetPasswordUserService();

        await authService.execute(email, password);

        return response.status(200).json({
            message: 'Senha alterada'
        });
    }
}