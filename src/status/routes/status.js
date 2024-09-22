module.exports = function (app) {

    app.get('/status', (req, res) => {
        res.send('API is up!');
    });
}