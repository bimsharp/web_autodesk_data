export interface IAutodeskResponse_Folder {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export interface IAutodeskFolder {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export class AutodeskFolder implements IAutodeskFolder {
    type; //string
    id; //string
    attributes; //string, json

    constructor(data: IAutodeskResponse_Folder) {
        this.type = data?.type;
        this.id = data?.id;
        this.attributes = data?.attributes;
    }
}

export interface IAutodeskResponse_Folders {
    data: IAutodeskResponse_Folder[];
}

export interface IAutodeskFolders {
    data: IAutodeskFolder[];
}

export class AutodeskFolders implements IAutodeskFolders {
    data: IAutodeskFolder[] = [];

    constructor(data: IAutodeskResponse_Folders) {
        this.data = [];
        data.data.forEach(hub => {
            this.data.push(new AutodeskFolder(hub));
        });
    }
}
export class GetAutodeskTopFolders_Payload {
    autodesk_access_token: string = '';
    autodesk_hub_id: string = '';
    autodesk_project_id: string = '';
    autodesk_user_id: string = '';

    constructor() { }
}
