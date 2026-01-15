import { useState } from "react";
import Home from "../home/Home";

function Login() {

   const [isLogged, setIsLogged] = useState(false);
   
  return (
    <>
    { isLogged == true ? (
      <Home
    titulo= "Componete Home"
    texto= "Bem-vindo de Volta"
    numero_turma= {11}
    finalizada= {false}

   />

    ) : (
      <div>
        <h2>Componente Login</h2>
        <button onClick={() => setIsLogged(true)}>Entrar</button>
      </div>
)
}
   </>
)
}

export default Login
