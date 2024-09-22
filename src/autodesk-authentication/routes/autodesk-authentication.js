
require('dotenv').config();
const { autodeskAuthenticationTwoLegged } = require('../controllers/autodesk-authentication');

module.exports = function (app) {

    app.get('/autodesk-authentication/two-legged', async (req, res) => {

        const result = await autodeskAuthenticationTwoLegged();

        res.send(result);
    });
}