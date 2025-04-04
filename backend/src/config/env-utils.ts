import dotEnv from "dotenv"
dotEnv.config()

export default ({
  SALT_PARA_HASH: Number(process.env.SALT_PARA_HASH) || 12,
  SEGREDO_JWT: process.env.SECRET_KEY_JWT || "e1bb7e2a"
})
