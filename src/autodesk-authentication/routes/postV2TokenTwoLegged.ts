
require('dotenv').config();
import controllers = require('../controllers/postV2TokenTwoLegged');
import { Request, Response } from 'express';

//@ts-ignore
module.exports = function (app) {

    app.get('/autodesk-authentication/two-legged', async (req: Request, res: Response) => {

        const result = await controllers.postTwoLegged();

        res.send(result);
    });
}