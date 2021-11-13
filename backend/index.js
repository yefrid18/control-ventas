const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const {db} = require('./settings/db');

require('dotenv').config();


const app = express();
db();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });*/


app.use('/api/auth', require('./routes/Auth'));

app.use('/api', require('./routes/App'));

// login

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log("Sever on port: ", app.get('port'));
});