// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const routes = require('./routes/router');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });


// app.use('/api', routes);

// module.exports = app

require('dotenv').config();               
const express = require('express');
const morgan  = require('morgan');
const helmet  = require('helmet');
const cors    = require('cors');

const router = require('./routes/router');

const app = express();

app.use(helmet());                   
app.use(cors());                     
app.use(express.json());            
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));


app.use('/api', router);


app.use((req, res, next) => {
  res.status(404).json({ msg: 'Recurso no encontrado' });
});

app.use((err, req, res, next) => {
  console.error(err);                               
  const status = err.statusCode || 500;
  res.status(status).json({
    msg: err.message || 'Error interno del servidor',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

module.exports = app;