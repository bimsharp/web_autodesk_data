
require('dotenv').config();
import { Request, Response } from 'express';
import * as controllers from '../controllers/getV1FolderSearch';
import * as models from '../models/getV1FolderSearch';

//@ts-ignore
module.exports = function (app) {
    app.get('/autodesk-data-management/folder-search', async (req: Request, res: Response) => {

        //@ToDo: this will get hard to manage if it needs to be flexible
        let filters = [];

        if (req?.query?.display_name_filter) {
            filters.push(<models.FilterCriteria>{
                filter_name: 'displayName',
                filter_value: <string>req.query.display_name_filter
            });
        }

        if (req?.query?.type_filter) {
            filters.push(<models.FilterCriteria>{
                filter_name: 'type',
                filter_value: <string>req.query.type_filter
            });
        }

        const params: models.GetAutodeskFolderSearch_Payload = {
            autodesk_access_token_three_legged: <string>req?.query?.autodesk_access_token_three_legged ?? '',
            autodesk_project_id: <string>req?.query?.autodesk_project_id ?? '',
            autodesk_folder_id: <string>req?.query?.autodesk_folder_id ?? '',
            filters: filters
        };

        const result = await controllers.get(params);

        res.send(result);
    });
}