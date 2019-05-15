const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/book-store', {useNewUrlParser: true});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('1111'));


const allowCrossDomain = require('./middlewares/allowCrossDomian');
const authMiddleWares = require('./middlewares/checkLogin.middlewares')
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');

const reactIndex = (req, res) =>  res.sendFile('./client/build/index.html', { root: __dirname });

app.use(allowCrossDomain);
app.use( express.static('./client/build',{ root: __dirname }));
app.get('/login', reactIndex);
app.use('/user', userRouter);
app.use('/product', authMiddleWares.requireLogin, productRouter);

app.listen(port, () => {
   console.log(`App listening on port ${port}`)
});