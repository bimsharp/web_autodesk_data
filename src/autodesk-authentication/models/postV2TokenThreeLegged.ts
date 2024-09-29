export interface IAutodeskResponse_TokenThreeLegged {
    access_token: string
    expires_in: number
    token_type: string
    refresh_token: string
}

export interface IAutodeskTokenThreeLegged {
    access_token: string
    expires_in: number
    token_type: string
    refresh_token: string
}

export class AutodeskTokenThreeLegged implements IAutodeskTokenThreeLegged {
    access_token; //string
    expires_in; //number, integer
    token_type; //string
    refresh_token; //string

    constructor(data: IAutodeskResponse_TokenThreeLegged) {
        this.access_token = data?.access_token;
        this.expires_in = data?.expires_in;
        this.token_type = data?.token_type;
        this.refresh_token = data?.refresh_token;
    }
}

export class PostAutodeskTokenThreeLegged_Payload {
    authorization_code: string = '';

    constructor() { }
}