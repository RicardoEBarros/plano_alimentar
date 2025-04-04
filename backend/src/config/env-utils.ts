import dotEnv from "dotenv"
dotEnv.config()

export default ({
  SEGREDO_JWT: process.env.SECRET_KEY_JWT || "e1bb7e2a"
})
