export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/plano-alimentar',
  porta: process.env.PORT ? process.env.PORT : 5050,
  saltDoEncriptador: 12
}
