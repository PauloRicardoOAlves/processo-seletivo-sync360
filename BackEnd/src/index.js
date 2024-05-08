const express = require('express');
const cors = require("cors");
const validationForm = require('./middleware/middlewares');
const { teste } = require('./controllers/controllers');
const app = express();

require('dotenv').config()

app.use(express.json());
app.use(cors())

app.post('/user', validationForm, teste);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/user`);
});
