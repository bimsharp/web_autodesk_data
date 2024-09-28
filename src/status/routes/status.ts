import { Request, Response } from 'express';
import * as controllers from '../controllers/status';

//@ts-ignore
module.exports = function (app) {
    app.get('/status', (req: Request, res: Response) => {

        const response = controllers.get();
        res.send(response);
    });
}