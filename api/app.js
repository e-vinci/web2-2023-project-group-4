const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://oceane-tran-vinci.github.io/CatLearning-frontend/'],
};

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', cors(corsOptions), usersRouter);
app.use('/pizzas', pizzaRouter);
app.use('/auths', cors(corsOptions), authsRouter);

module.exports = app;
