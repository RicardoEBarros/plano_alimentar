import { RegistroBuilder } from '../../../builders/presentation/controllers/registro-builder'

export class RegistroObjectMother {

  static nomeAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .nomeAusente()
      .build()
  }

  static emailAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .emailAusente()
      .build()
  }

  static sexoAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .sexoAusente()
      .build()
  }

  static sexoInvalido(): object {
    return RegistroBuilder
      .aRegistro()
      .sexoInvalido()
      .build()
  }

  static idadeAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .idadeAusente()
      .build()
  }

  static alturaAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .alturaAusente()
      .build()
  }

  static pesoAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .pesoAusente()
      .build()
  }

  static objetivoFinalAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .objetivoFinalAusente()
      .build()
  }

  static objetivoFinalInvalido(): object {
    return RegistroBuilder
      .aRegistro()
      .objetivoFinalInvalido()
      .build()
  }

  static passwordAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .passwordAusente()
      .build()
  }

  static confirmarPasswordAusente(): object {
    return RegistroBuilder
      .aRegistro()
      .confirmarPasswordAusente()
      .build()
  }

  static emailInvalido(): object {
    return RegistroBuilder
      .aRegistro()
      .emailInvalido()
      .build()
  }

}
