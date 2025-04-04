import { GerarToken } from "@/src/data/protocols/token"
import { ParamsExtrasJwt } from "../../protocols"
import jwt from "jsonwebtoken"
import envUtils from "@/src/config/env-utils"

export class JwtAdapter implements GerarToken {
  
  constructor(private readonly extras: ParamsExtrasJwt) {}

  gerar(payload: any): string {

    jwt.sign(payload, envUtils.SEGREDO_JWT, this.extras)

    return null
  }

}
