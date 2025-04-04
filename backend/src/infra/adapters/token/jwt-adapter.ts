import { GerarToken } from "@/src/data/protocols/token"
import { ParamsExtrasJwt } from "../../protocols"
import envUtils from "@/src/config/env-utils"
import jwt from "jsonwebtoken"

export class JwtAdapter implements GerarToken {
  
  constructor(private readonly configExtras: ParamsExtrasJwt) {}

  gerar(payload: any): string {
    return jwt.sign(payload, envUtils.SEGREDO_JWT, this.configExtras)
  }

}
