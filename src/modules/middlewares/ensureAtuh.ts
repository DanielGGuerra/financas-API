import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

function enseureAuth(request: Request, response: Response, next: NextFunction) {
    var authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(' ');

    try {
        const { sub } = verify(token, '3d0f3b9ddcacec30c4008c5e030e6c13a478cb4f');

        return next();
    } catch(e) {

        return response.status(401).end();
    }
}