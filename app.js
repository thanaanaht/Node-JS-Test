const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const morgan = require('morgan');

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
    res.send('Hello Nui Thanakorn');
});

app.listen(port, () => {
    debug("Listening on port %d" + chalk.blue(port));
});
