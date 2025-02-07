export default {
  salt: 12,
  porta: process.env.PORT ? process.env.PORT : 5050,
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/plano-alimentar',
  chaveSecretaJwt: process.env.JWT_SECRET || '*iB_&%$çzw'
}
