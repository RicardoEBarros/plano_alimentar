import { RegistradorBuilder } from '@/tests/mocks/builders/presentation/controllers/registro/registro-controller-builder'

export class RegistradorObjectMother {

  static valido(): object {
    return RegistradorBuilder
      .aRegistro()
      .build()
  }

  static idAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .idAusente()
      .build()
  }

  static nomeAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .nomeAusente()
      .build()
  }

  static emailAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .emailAusente()
      .build()
  }

  static sexoAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .sexoAusente()
      .build()
  }

  static sexoInvalido(): object {
    return RegistradorBuilder
      .aRegistro()
      .sexoInvalido()
      .build()
  }

  static idadeAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .idadeAusente()
      .build()
  }

  static alturaAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .alturaAusente()
      .build()
  }

  static pesoAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .pesoAusente()
      .build()
  }

  static objetivoFinalAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .objetivoFinalAusente()
      .build()
  }

  static objetivoFinalInvalido(): object {
    return RegistradorBuilder
      .aRegistro()
      .objetivoFinalInvalido()
      .build()
  }

  static passwordAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .passwordAusente()
      .build()
  }

  static confirmarPasswordAusente(): object {
    return RegistradorBuilder
      .aRegistro()
      .confirmarPasswordAusente()
      .build()
  }

  static emailInvalido(): object {
    return RegistradorBuilder
      .aRegistro()
      .emailInvalido()
      .build()
  }

  static confirmarPasswordInvalido(): object {
    return RegistradorBuilder
      .aRegistro()
      .confirmarPasswordInvalido()
      .build()
  }

}
