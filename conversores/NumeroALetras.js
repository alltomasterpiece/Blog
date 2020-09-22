/*************************************************************/
// NumeroALetras
// The MIT License (MIT)
//
// Copyright (c) 2015 Luis Alfredo Chee
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// @author Rodolfo Carmona
// @contributor Jean (jpbadoino@gmail.com)
/*************************************************************/
const numerosAletras = {
  Unidades(num) {
    switch (num) {
      case 1:
        return 'un'
      case 2:
        return 'dos'
      case 3:
        return 'tres'
      case 4:
        return 'cuatro'
      case 5:
        return 'cinco'
      case 6:
        return 'seis'
      case 7:
        return 'siete'
      case 8:
        return 'ocho'
      case 9:
        return 'nueve'
    }

    return ''
  },
  // this.Unidades()

  Decenas(num) {
    const decena = Math.floor(num / 10)
    const unidad = num - decena * 10

    switch (decena) {
      case 1:
        switch (unidad) {
          case 0:
            return 'diez'
          case 1:
            return 'once'
          case 2:
            return 'doce'
          case 3:
            return 'trece'
          case 4:
            return 'catorce'
          case 5:
            return 'quince'
          default:
            return 'dieci' + this.Unidades(unidad)
        }
      case 2:
        switch (unidad) {
          case 0:
            return 'veinte'
          default:
            return 'veinti' + this.Unidades(unidad)
        }
      case 3:
        return this.DecenasY('treinta', unidad)
      case 4:
        return this.DecenasY('cuarenta', unidad)
      case 5:
        return this.DecenasY('cincuenta', unidad)
      case 6:
        return this.DecenasY('sesenta', unidad)
      case 7:
        return this.DecenasY('setenta', unidad)
      case 8:
        return this.DecenasY('ochenta', unidad)
      case 9:
        return this.DecenasY('noventa', unidad)
      case 0:
        return this.Unidades(unidad)
    }
  },
  // this.Unidades()

  DecenasY(strSin, numUnidades) {
    if (numUnidades > 0) return strSin + ' y ' + this.Unidades(numUnidades)

    return strSin
  },
  // DecenasY()

  Centenas(num) {
    const centenas = Math.floor(num / 100)
    const decenas = num - centenas * 100

    switch (centenas) {
      case 1:
        if (decenas > 0) return 'ciento ' + this.Decenas(decenas)
        return 'cien'
      case 2:
        return 'doscientos ' + this.Decenas(decenas)
      case 3:
        return 'trescientos ' + this.Decenas(decenas)
      case 4:
        return 'cuatrocientos ' + this.Decenas(decenas)
      case 5:
        return 'quinientos ' + this.Decenas(decenas)
      case 6:
        return 'seiscientos ' + this.Decenas(decenas)
      case 7:
        return 'setecientos ' + this.Decenas(decenas)
      case 8:
        return 'ochocientos ' + this.Decenas(decenas)
      case 9:
        return 'novecientos ' + this.Decenas(decenas)
    }

    return this.Decenas(decenas)
  },
  // this.Centenas()

  Seccion(num, divisor, strSingular, strPlural) {
    const cientos = Math.floor(num / divisor)
    const resto = num - cientos * divisor

    let letras = ''

    if (cientos > 0) {
      if (cientos > 1) {
        letras = this.Centenas(cientos) + ' ' + strPlural
      } else {
        letras = strSingular
      }
    }

    if (resto > 0) {
      letras += ''
      return letras
    }
  },
  // Seccion()

  Miles(num) {
    const divisor = 1000
    const cientos = Math.floor(num / divisor)
    const resto = num - cientos * divisor

    const strMiles = this.Seccion(num, divisor, 'un mil', 'mil')
    const strCentenas = this.Centenas(resto)

    if (strMiles === '') return strCentenas

    return strMiles + ' ' + strCentenas
  },
  // Miles()

  Millones(num) {
    const divisor = 1000000
    const cientos = Math.floor(num / divisor)
    const resto = num - cientos * divisor

    const strMillones = this.Seccion(num, divisor, 'un millon ', 'millones ')
    const strMiles = this.Miles(resto)

    if (strMillones === '') return strMiles

    return strMillones + ' ' + strMiles
  },
  // Millones()

  NumeroALetras(num) {
    const data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: Math.round(num * 100) - Math.floor(num) * 100,
      letrasCentavos: '',
      letrasMonedaPlural: '', // 'PESOS', 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: '', // 'PESO', 'Dólar', 'Bolivar', 'etc'

      letrasMonedaCentavoPlural: '',
      letrasMonedaCentavoSingular: ''
    }
    let conn = ''

    if (data.centavos > 0) {
      if (data.centavos === 1) {
        conn =
          this.Millones(data.centavos) + '' + data.letrasMonedaCentavoSingular
      } else {
        conn =
          this.Millones(data.centavos) + '' + data.letrasMonedaCentavoPlural
      }
      data.letrasCentavos = ' con ' + conn
    }

    if (data.enteros === 0) {
      return 'cero' + data.letrasMonedaPlural + '' + data.letrasCentavos
    }
    if (data.enteros === 1) {
      return (
        this.Millones(data.enteros) +
        '' +
        data.letrasMonedaSingular +
        '' +
        data.letrasCentavos
      )
    } else {
      return (
        this.Millones(data.enteros) +
        '' +
        data.letrasMonedaPlural +
        '' +
        data.letrasCentavos
      )
    }
  } // NumeroALetras()
}

export default numerosAletras
