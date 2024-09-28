
require('dotenv').config();
import { Request, Response } from 'express';
import controllers = require('../controllers/getV1Hubs');
import { GetAutodeskHubs_Payload } from '../models/getV1Hubs';

//@ts-ignore
module.exports = function (app) {
    app.get('/autodesk-data-management/hubs', async (req: Request, res: Response) => {

        const params = new GetAutodeskHubs_Payload();
        params.autodesk_access_token = <string>req?.query?.autodesk_access_token ?? '';
        params.autodesk_user_id = <string>req?.query?.autodesk_user_id ?? '';

        const result = await controllers.get(params);

        res.send(result);
    });
}