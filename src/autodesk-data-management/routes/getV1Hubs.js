
require('dotenv').config();
const { get } = require('../controllers/getV1Hubs');

module.exports = function (app) {

    app.get('/autodesk-data-management/hubs', async (req, res) => {
        
        const result = await get(req.query);

        res.send(result);
    });
}