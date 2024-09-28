export interface IAutodeskResponse_Hub {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export interface IAutodeskHub {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export class AutodeskHub implements IAutodeskHub {
    type; //string
    id; //string
    attributes; //string, json

    constructor(data: IAutodeskResponse_Hub) {
        this.type = data?.type;
        this.id = data?.id;
        this.attributes = data?.attributes;
    }
}

export interface IAutodeskResponse_Hubs {
    data: IAutodeskResponse_Hub[];
}

export interface IAutodeskHubs {
    data: IAutodeskHub[];
}

export class AutodeskHubs implements IAutodeskHubs {
    data: IAutodeskHub[] = [];

    constructor(data: IAutodeskResponse_Hubs) {
        this.data = [];
        data.data.forEach(hub => {
            this.data.push(new AutodeskHub(hub));
        });
    }
}
export class GetAutodeskHubs_Payload {
    autodesk_access_token: string = '';
    autodesk_user_id: string = '';

    constructor() { }
}
