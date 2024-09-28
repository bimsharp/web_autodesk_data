
export interface IAutodeskResponse_Error {
    code: string
    message: string
    name: string
    status: number
    config: IAutodeskResponse_ErrorConfig
}

export interface IAutodeskResponse_ErrorConfig {
    data: string
    method: string
    url: string
}

export interface IAutodeskError {
    code: string
    data: string
    method: string
    message: string
    name: string
    status: number
    url: string
}

export class AutodeskError implements IAutodeskError {
    code; //string
    data; //string
    method; //string
    message; //string
    name; //string
    status; //number, integer
    url; //string

    constructor(error: IAutodeskResponse_Error) {
        this.code = error?.code;
        this.data = error?.config?.data;
        this.method = error?.config?.method;
        this.message = error?.message;
        this.name = error?.name;
        this.status = error?.status;
        this.url = error?.config?.url;
    }
}