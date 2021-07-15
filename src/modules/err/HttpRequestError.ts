import { IErrorPadraoContract } from "../contract/IErrorPadraoContract";

export default class HttpRequestError extends Error {
    status: number;

    constructor({ status, name, message }: IErrorPadraoContract){
        super();
        this.name = name;
        this.message = message;
        this.status = status;
    }
}