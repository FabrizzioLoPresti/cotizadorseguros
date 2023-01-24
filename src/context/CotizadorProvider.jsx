import { useState, createContext } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')
  const [resultado, setResultado] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {
    // console.log( e.target.name )
    // console.log( e.target.value )
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Base
    let resultado = 2000

    // Obtener diferencia de Years
    const diferenciaYears = obtenerDiferenciaYear(datos.year)

    // Restar 3% por cada Year anterior
    resultado -= ((diferenciaYears * 3) * resultado) / 100

    // Europero 30%
    // Americano 15%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca)
    console.log( resultado )

    // Basico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan)

    // Formatear Cantidad Dinero
    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 2000);
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}
export default CotizadorContext