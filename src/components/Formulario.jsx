import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"
import { MARCAS, YEARS, PLANES } from "../constants"

const Formulario = () => {

  const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(datos).includes('')) return setError('Todos los campos son obligatorios')

    setError('')
    cotizarSeguro()
  }
  
  return (
    <>
      {error && <Error />}
      <form
        onSubmit={ handleSubmit }
      >
        <div className="my-5">
          <label 
            htmlFor="marca" 
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select 
            name="marca" 
            id="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={ handleChangeDatos } // onChange={ e => handleChangeDatos(e) } pero el evento se pasa automaticamente
            // defaultValue=""
            value={datos.marca}
          >
            <option value="" disabled>--Seleccione Marca--</option>
            {MARCAS.map(marca => (
              <option
                key={marca.id}
                value={marca.id}
              >
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label 
            htmlFor="year" 
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select 
            name="year" 
            id="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={ handleChangeDatos } // onChange={ e => handleChangeDatos(e) } pero el evento se pasa automaticamente
            // defaultValue=""
            value={datos.year}
          >
            <option value="" disabled>--Seleccione Año--</option>
            {YEARS.map(year => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label 
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>
          
          <div className="flex gap-3 items-center">
            {PLANES.map(plan => (
              <Fragment
                key={plan.id}
              >
                <label htmlFor={plan.id}>{plan.nombre}</label>
                <input 
                  type="radio" 
                  name="plan" // Agrupar los distintos RadioButtons
                  id={plan.id} // Click en Label asocia al Input
                  value={plan.id} // Tomar el Value el Radio Seleccionado al Enviar Form
                  onChange={ handleChangeDatos } // onChange={ e => handleChangeDatos(e) } pero el evento se pasa automaticamente
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input 
          type="submit" 
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" 
        />
      </form>
    </>
  )
}

export default Formulario