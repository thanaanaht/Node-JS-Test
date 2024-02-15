const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const morgan = require('morgan');

const app = express();
const port = 3000;
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))
app.get("/", (_req, res) => {
    res.send('Hello Nui Thanakorn');
});

app.listen(port, () => {
    debug("Listening on port %d" + chalk.blue(port));
});
