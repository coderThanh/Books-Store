const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

mongoose.connect('mongodb://localhost/book-store', {useNewUrlParser: true});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('1111'));


const allowCrossDomain = require('./middlewares/allowCrossDomian');
const authMiddleWares = require('./middlewares/checkLogin.middlewares')
const loginRouter = require('./routes/login.router');
const productRouter = require('./routes/product.router');

app.use(allowCrossDomain);

app.use('/login', loginRouter);
// app.use('/product', authMiddleWares.requireLogin, productRouter);
app.use('/product', productRouter);

app.listen(5000, () => {
   console.log('App listening on port 5000')
});