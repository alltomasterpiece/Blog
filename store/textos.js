import numerosAletras from '~/conversores/NumeroALetras'
export const state = () => ({
  texto: ''
})

export const mutations = {
  toUpperCase(state) {
    state.texto = state.texto.toUpperCase()
  },
  toLowerCase(state) {
    state.texto = state.texto.toLowerCase()
  },
  toSentenceCase(state) {
    state.texto = state.texto
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => {
        return c.toUpperCase()
      })
  },
  toRomanNumbers(state) {
    let number = state.texto
    let roman = ''
    const romanNumList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XV: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let a
    if (number < 1 || number > 3999) return 'Enter a number between 1 and 3999'
    else {
      for (const key in romanNumList) {
        a = Math.floor(number / romanNumList[key])
        if (a >= 0) {
          for (let i = 0; i < a; i++) {
            roman += key
          }
        }
        number = number % romanNumList[key]
      }
    }

    state.texto = roman
  },
  toArabicNumbers(state) {
    let romanNumber = state.texto.toUpperCase()
    const romanNumList = [
      'CM',
      'M',
      'CD',
      'D',
      'XC',
      'C',
      'XL',
      'L',
      'IX',
      'X',
      'IV',
      'V',
      'I'
    ]
    const corresp = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1]
    let index = 0
    let num = 0
    for (const rn in romanNumList) {
      index = romanNumber.indexOf(romanNumList[rn])
      while (index !== -1) {
        num += parseInt(corresp[rn])
        romanNumber = romanNumber.replace(romanNumList[rn], '-')
        index = romanNumber.indexOf(romanNumList[rn])
      }
    }
    state.texto = num
  },

  deNumeroALetras(state) {
    const number = state.texto.replace(/,/g, '.')
    state.texto = numerosAletras.NumeroALetras(number, 'nominal', 3)
  },
  setTexto(state, texto) {
    state.texto = texto
  }
}
