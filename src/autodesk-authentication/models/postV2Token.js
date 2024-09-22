class AutodeskTokenTwoLegged {
    access_token; //string
    expires_in; //number, integer
    token_type; //string

    constructor(data) { 
        this.access_token = data?.access_token;
        this.expires_in = data?.expires_in;
        this.token_type = data?.token_type;
    }
}

class AutodeskTokenTwoLeggedError {
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
    AutodeskTokenTwoLegged,
    AutodeskTokenTwoLeggedError
}