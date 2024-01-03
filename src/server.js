require('express-async-errors');
require("dotenv/config");

const migrations = require('./database/sqlite/migrations');
const uploadConfig = require('./config/upload');
const express = require('express');
const cors = require('cors');

const AppError = require('./utils/AppError');

const app = express();
app.use(cors());

const routes = require('./routes');

app.use('/file', express.static(uploadConfig.UPLOAD_FOLDER));

app.use(express.json());
app.use(routes);

migrations();

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Erro interno'
    })
})

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));
