// 'use strict'

// const mongoose = require('mongoose');
// const app = require('./app');
// require('dotenv').config({ path: 'variables.env' })

// const host = process.env.HOST || '0.0.0.0';
// const port = process.env.PORT || 3800;

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://cricca0707:TpEgc9bOxhrpFrGF@cluster0.ckv1pet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useMongoClient: true })
//     .then(() => {
//         console.log('Success conection');

//         app.listen(port, host, () => {
//             console.log('Run server localhost:3800')
//         })
//     }).catch(err => {
//         console.log(err);
//     })

require('dotenv').config();          // Carga variables de entorno (.env)
const mongoose = require('mongoose');
const app      = require('./app');

const PORT       = process.env.PORT       || 3000;
const MONGO_URI  = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅  MongoDB conectado');

  app.listen(PORT, () =>
    console.log(`🚀  API escuchando en http://localhost:${PORT}/api`)
  );
})
.catch((err) => {
  console.error('❌  Error al conectar con MongoDB:\n', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('⚠️  Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('💥  Uncaught Exception:', err);
  process.exit(1);                   
});