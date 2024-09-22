
require('dotenv').config();
const { postTwoLegged } = require('../controllers/v2Token');

module.exports = function (app) {

    app.get('/autodesk-authentication/two-legged', async (req, res) => {

        const result = await postTwoLegged();

        res.send(result);
    });
}