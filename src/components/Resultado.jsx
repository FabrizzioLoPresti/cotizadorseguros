import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

  const { resultado, datos } = useCotizador()
  const { marca, plan, year } = datos

  const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [resultado] )
  const [nombrePlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado] )
  const yearRef = useRef(year)

  if(resultado == 0 || resultado == '') return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-700 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Vehiculo: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado