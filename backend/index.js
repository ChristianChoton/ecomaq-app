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
//const MONGO_URI  = process.env.MONGO_URI  || 'mongodb://localhost:27017/tienda';
const MONGO_URI = 'mongodb+srv://cricca0707:TpEgc9bOxhrpFrGF@cluster0.ckv1pet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
/* ───── Conexión a MongoDB ───────────────────────────────────────────── */
mongoose.connect(MONGO_URI, {
  // Opciones modernas recomendadas
  useNewUrlParser:    true,
  useUnifiedTopology: true,
  // maxPoolSize: 10   // Ajusta tu pool si lo necesitas
})
.then(() => {
  console.log('✅  MongoDB conectado');

  /* ───── Arranque del servidor ─────────────────────────────────────── */
  app.listen(PORT, () =>
    console.log(`🚀  API escuchando en http://localhost:${PORT}/api`)
  );
})
.catch((err) => {
  console.error('❌  Error al conectar con MongoDB:\n', err);
  process.exit(1);
});

/* ───── Manejo de errores de proceso ─────────────────────────────────── */
process.on('unhandledRejection', (reason) => {
  console.error('⚠️  Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('💥  Uncaught Exception:', err);
  process.exit(1);                   // Salida segura; usa PM2 / forever para reinicios
});