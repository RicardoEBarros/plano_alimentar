export const STRONG_PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const STRONG_PASSWORD_MESSAGES = {
  LIGHT_PASSWORD:
    'Deve conter até 8 caracteres, sendo, ao menos, 1 letra maiúscula, 1 minúscula, 1 número e 1 caracter especial',
}
