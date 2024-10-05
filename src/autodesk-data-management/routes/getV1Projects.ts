
require('dotenv').config();
import { Request, Response } from 'express';
import * as controllers from '../controllers/getV1Projects';
import * as models from '../models/getV1Projects';

//@ts-ignore
module.exports = function (app) {
    app.get('/autodesk-data-management/projects', async (req: Request, res: Response) => {

        const params: models.GetAutodeskProjects_Payload = {
            autodesk_access_token: <string>req?.query?.autodesk_access_token ?? '',
            autodesk_hub_id: <string>req?.query?.autodesk_hub_id ?? '',
            autodesk_user_id: <string>req?.query?.autodesk_user_id ?? '',
        };

        const result = await controllers.get(params);

        res.send(result);
    });
}