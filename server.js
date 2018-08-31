const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env') !== 'production';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(cors());

if (!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(logger('common'));

    app.use(express.static(path.resolve(__dirname, 'build')));

    app.use(routes)
}

if (dev){
    app.use(logger('dev'));
    app.use(routes)
}

const server = createServer(app);

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

