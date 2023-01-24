const MARCAS = [
  { id: 1, nombre: 'Europeo' },
  { id: 2, nombre: 'Americano' },
  { id: 3, nombre: 'Asiatico' },
]

const YEARMAX = new Date().getFullYear() // 2023
const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index) // [2023, 2022, ...]

const PLANES = [
  { id: 1, nombre: 'Basico' },
  { id: 2, nombre: 'Completo' },
]

export {
  MARCAS,
  YEARS,
  PLANES
}