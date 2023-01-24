const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year
}

const calcularMarca = (marca) => {
  let incremento
  switch (marca) {
    case "1":
      incremento = 1.30
      break;
    case "2":
      incremento = 1.15
      break;
    case "3":
      incremento = 1.05
      break;
    default:
      break;
  }
  return incremento
}

const calcularPlan = (plan) => {
  return plan === 1 ? 1.2 : 1.5
}

const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export { 
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero
}