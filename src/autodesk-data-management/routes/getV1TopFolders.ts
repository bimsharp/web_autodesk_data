
require('dotenv').config();
import { Request, Response } from 'express';
import * as controllers from '../controllers/getV1TopFolders';
import * as models from '../models/getV1TopFolders';

//@ts-ignore
module.exports = function (app) {
    app.get('/autodesk-data-management/projects', async (req: Request, res: Response) => {

        const params: models.GetAutodeskTopFolders_Payload = {
            autodesk_access_token: <string>req?.query?.autodesk_access_token ?? '',
            autodesk_hub_id: <string>req?.query?.autodesk_hub_id ?? '',
            autodesk_project_id: <string>req?.query?.autodesk_project_id ?? '',
            autodesk_user_id: <string>req?.query?.autodesk_user_id ?? '',
        };

        const result = await controllers.get(params);

        res.send(result);
    });
}