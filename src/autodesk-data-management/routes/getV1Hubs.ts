
require('dotenv').config();
import { Request, Response } from 'express';
import * as controllers from '../controllers/getV1Hubs';
import * as models from '../models/getV1Hubs';

//@ts-ignore
module.exports = function (app) {
    app.get('/autodesk-data-management/hubs', async (req: Request, res: Response) => {

        const params: models.GetAutodeskHubs_Payload = {
            autodesk_access_token: <string>req?.query?.autodesk_access_token ?? '',
            autodesk_user_id: <string>req?.query?.autodesk_user_id ?? ''
        };

        const result = await controllers.get(params);

        res.send(result);
    });
}