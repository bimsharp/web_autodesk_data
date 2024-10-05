export interface IAutodeskResponse_Project {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export interface IAutodeskProject {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export class AutodeskProject implements IAutodeskProject {
    type; //string
    id; //string
    attributes; //string, json

    constructor(data: IAutodeskResponse_Project) {
        this.type = data?.type;
        this.id = data?.id;
        this.attributes = data?.attributes;
    }
}

export interface IAutodeskResponse_Projects {
    data: IAutodeskResponse_Project[];
}

export interface IAutodeskProjects {
    data: IAutodeskProject[];
}

export class AutodeskProjects implements IAutodeskProjects {
    data: IAutodeskProject[] = [];

    constructor(data: IAutodeskResponse_Projects) {
        this.data = [];
        data.data.forEach(hub => {
            this.data.push(new AutodeskProject(hub));
        });
    }
}
export class GetAutodeskProjects_Payload {
    autodesk_access_token: string = '';
    autodesk_hub_id: string = '';
    autodesk_user_id: string = '';

    constructor() { }
}
