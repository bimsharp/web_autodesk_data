
require('dotenv').config();
import * as controllers from '../controllers/postV2TokenThreeLegged';
import * as models from '../models/postV2TokenThreeLegged';
import { Request, Response } from 'express';

//@ts-ignore
module.exports = function (app) {

    app.get('/autodesk-authentication/three-legged', async (req: Request, res: Response) => {
        //@ToDo: use debug package for this
        //@ToDo: implement logger as a middleware
        console.log(`GET /autodesk-authentication/three-legged`);
        
        //@ToDo: use middleware for this
        res.header("Access-Control-Allow-Origin", "http://localhost:3001");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, Access-Control-Allow-Origin");
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');

        const params: models.PostAutodeskTokenThreeLegged_Payload = {
            authorization_code: <string>req?.query?.code ?? ''
        };

        const result = await controllers.postThreeLegged(params);

        res.send(result);
    });
}