export function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

export function isValidEmail (v) {
    return (
        v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        )
      )
};

export function isValidName (v) {
    return v.match(/^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i)
      ? true
      : false
}

export function isValidCpf(cpf) {
    cpf = cpf.replace(/\D/g, '')
    if (cpf.length !== 11) return false
    if (cpf === cpf[0].repeat(cpf.length)) return false
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i)
    }
    const firstDV = 11 - (sum % 11)
    const firstDvCalculated = firstDV > 9 ? 0 : firstDV
    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i)
    }
    const secondDV = 11 - (sum % 11)
    const secondDvCalculated = secondDV > 9 ? 0 : secondDV
    const lastDigits = parseInt(cpf.slice(9))
    return lastDigits === firstDvCalculated * 10 + secondDvCalculated
  }

export function isValidCnpj (cnpj) {
    cnpj = cnpj.replace(/\D/g, '')
    if (cnpj.length !== 14) return false
    let sum = 0
    let weight = 5
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj[i]) * weight
      weight = weight === 2 ? 9 : weight - 1
    }
    const firstDV = 11 - (sum % 11)
    const firstDvCalculated = firstDV > 9 ? 0 : firstDV
    sum = 0
    weight = 6
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj[i]) * weight
      weight = weight === 2 ? 9 : weight - 1
    }
    const secondDV = 11 - (sum % 11)
    const secondDvCalculated = secondDV > 9 ? 0 : secondDV
    const lastDigits = parseInt(cnpj.slice(12))
    return lastDigits === firstDvCalculated * 10 + secondDvCalculated
}

export function isValidDate (value) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(value)) {
        return false;
    }
    const [, day, month, year] = value.match(regex);
    const dateObj = new Date(`${year}-${month}-${day}`);
    const isValid = dateObj instanceof Date && !isNaN(dateObj);
    const currentYear = new Date().getFullYear();
    const minYear = 1900;
    if (parseInt(year, 10) < minYear || parseInt(year, 10) > currentYear) {
        return false;
    }

    return isValid;
}

export function isValidPhone (value){
    return value.replace(/\D/g, '').length === 11
}