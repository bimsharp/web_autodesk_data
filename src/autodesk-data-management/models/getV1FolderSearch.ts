import { spread } from "axios";

export interface IAutodeskResponse_FolderSearchResult {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export interface IAutodeskFolderSearchResult {
    type: string;
    id: string;
    attributes: JSON; //string, json
}

export class AutodeskFolderSearchResult implements IAutodeskFolderSearchResult {
    type; //string
    id; //string
    attributes; //string, json

    constructor(data: IAutodeskResponse_FolderSearchResult) {
        this.type = data?.type;
        this.id = data?.id;
        this.attributes = data?.attributes;
    }
}

export interface IAutodeskResponse_FolderSearchResults {
    data: IAutodeskResponse_FolderSearchResult[];
}

export interface IAutodeskFolderSearchResults {
    data: IAutodeskFolderSearchResult[];
}

export class AutodeskFolderSearchResults implements IAutodeskFolderSearchResults {
    data: IAutodeskFolderSearchResult[] = [];

    constructor(data: IAutodeskResponse_FolderSearchResults) {
        this.data = [];
        data.data.forEach(hub => {
            this.data.push(new AutodeskFolderSearchResult(hub));
        });
    }
}

export class FilterCriteria {
    filter_name: string = '';
    filter_value: string = '';

    constructor() { }
}

export class GetAutodeskFolderSearch_Payload {
    autodesk_access_token_three_legged: string = '';
    autodesk_folder_id: string = '';
    autodesk_project_id: string = '';
    filters: FilterCriteria[] = [];

    constructor() { }
}
