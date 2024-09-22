class AutodeskError {
    code; //string
    data; //string
    method; //string
    message; //string
    name; //string
    status; //number, integer
    url; //string

    constructor(error) {
        this.code = error?.code;
        this.data = error?.config?.data;
        this.method = error?.config?.method;
        this.message = error?.message;
        this.name = error?.name;
        this.status = error?.status;
        this.url = error?.config?.url;
    }
}

module.exports = {
    AutodeskError
}