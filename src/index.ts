const express = require('express');
const app = express();
require('dotenv').config();

var glob = require('glob');
var path = require('path');

const routesFiles = glob.sync('./**/routes/**/*.js');

//@ts-ignore
routesFiles.forEach(function (file) {
    const fullPath = path.resolve(file);
    require(fullPath)(app);
    //debug(fullPath); //@ToDo: implement debug as devDependency when debugger attachment is more helpful
});


app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
});
