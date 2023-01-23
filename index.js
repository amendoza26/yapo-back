require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require("cors");
const { connectDB } = require('./config/db');

connectDB();

const swaggerDocument = YAML.load('./app/docs/apis.yaml');

const PORT = process.env.PORT

let corsOptions = '*';

// middlewares
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true, limit: '200mb' }));
app.use(bodyParser.json({ limit: '200mb', extended: true }));

let indexRoute = require('./app/routes/index');
app.use('/api', indexRoute);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
})
