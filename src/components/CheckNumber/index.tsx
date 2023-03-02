import { useState } from "react"

export const CheckNumber = () => {
  const [number, setNumber] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const isEven = parseInt(number) % 2 === 0

  return (
    <div>
      <h1>Componente Par ou Ímpar</h1>
      <input 
        type="text" 
        name="number" 
        placeholder="Digite um número" 
        value={number}
        onChange={(event) => {
          const rawValue = event.target.value

          const numberValue = parseInt(rawValue)
          setNumber(rawValue)

          if (isNaN(numberValue)) {
            setErrorMessage("Por favor, digite um número")
            return
          }

          setErrorMessage("")
        }}
      />

      {<p>{isEven ? "Par" : "Ímpar"}</p>}
      <p>{errorMessage}</p>
    </div>
  )
} 