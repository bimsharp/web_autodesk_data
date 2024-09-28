import { Request, Response } from 'express';

//@ts-ignore
module.exports = function (app) {
    app.get('/status', (req: Request, res: Response) => {
        res.send('API is up!');
    });
}