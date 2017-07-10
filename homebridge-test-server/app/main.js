const express = require('express');
const app = express();
const routers = require('./routers.js');


app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);

    next();
})


app.use('/api', routers)


app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});