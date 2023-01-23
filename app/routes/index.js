const express = require('express');
const app = express();

const musica = require('./musica/musica');

app.use('/musica', musica);

module.exports = app;