
require('dotenv').config();
import * as controllers from '../controllers/postV2TokenThreeLegged';
import * as models from '../models/postV2TokenThreeLegged';
import { Request, Response } from 'express';

//@ts-ignore
module.exports = function (app) {

    app.get('/autodesk-authentication/three-legged', async (req: Request, res: Response) => {

        const params: models.PostAutodeskTokenThreeLegged_Payload = {
            authorization_code: <string>req?.query?.code ?? ''
        };

        const result = await controllers.postThreeLegged(params);

        res.send(result);
    });
}