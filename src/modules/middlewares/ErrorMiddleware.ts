import { NextFunction, Request, Response } from "express";
import HttpRequestError from "../err/HttpRequestError";

export default function errorMiddleware(
        error: Error, 
        request: Request, 
        response: Response, 
        next: NextFunction
    ): Response
    {
        if(error instanceof Error) {
            return response.status(400).json({
                status: error.status,
                name: error.name,
                message: error.message
            });
        }

        console.log(error);

        return response.status(500).json({
            statuc: 500,
            name: 'ServerError',
            message: 'Internal Server Error'
        })
}