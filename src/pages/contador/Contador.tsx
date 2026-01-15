import { useState } from "react"

function Contador() {
// logica JS/TS
const [valor, setValor] = useState (0); //Variavel de estado

function handleClick(){
   setValor(valor + 1);
}
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {valor}</p>
      <button onClick={handleClick}> Adicionar +1</button>
      </div>
  )
}

export default Contador