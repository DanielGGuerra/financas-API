interface IErrorPadrao {
    status: number;
    name: string;
    message: string;
}

export default class HttpRequestError extends Error {
    status: number;

    constructor({ status, name, message }: IErrorPadrao){
        super();
        this.name = name;
        this.message = message;
        this.status = status;
    }
}