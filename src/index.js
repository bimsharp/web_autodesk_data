const express = require('express');
const app = express();
require('dotenv').config();
require('./status/routes/status')(app);

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
});
