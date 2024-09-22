class BuiltInError {
    code; //string
    message; //string
    status; //number, integer

    constructor(code, status, message) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}

module.exports = {
    BuiltInError
}