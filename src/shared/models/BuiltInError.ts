export class BuiltInError {
    code; //string
    message; //string
    status; //number, integer

    constructor(code: string, status: string, message: string) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}