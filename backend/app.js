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