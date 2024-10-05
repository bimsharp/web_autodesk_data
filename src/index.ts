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

//@ts-ignore
app.use(function(req, res) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  });

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
});
