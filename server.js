const express = require('express');
const path = require('path');
const app = express();
const front = __dirname + '/dist/sweetening-front';
app.use(express.static(front));
app.get('/*', function (req, res) { res.sendFile(path.join(front)); });
app.listen(process.env.PORT || 8080);