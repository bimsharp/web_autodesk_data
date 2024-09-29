export interface IAutodeskResponse_TokenTwoLegged {
    access_token: string
    expires_in: number
    token_type: string
}

export interface IAutodeskTokenTwoLegged {
    access_token: string
    expires_in: number
    token_type: string
}

export class AutodeskTokenTwoLegged implements IAutodeskTokenTwoLegged {
    access_token; //string
    expires_in; //number, integer
    token_type; //string

    constructor(data: IAutodeskResponse_TokenTwoLegged) {
        this.access_token = data?.access_token;
        this.expires_in = data?.expires_in;
        this.token_type = data?.token_type;
    }
}
