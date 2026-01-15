import { useEffect, useState } from "react";

function Tarefa() {
  //variaveis de estado

  const [logado, setLogado] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {

      if(logado == true){
        setTarefa('Carregando Feed...')
      }

     }, [logado]);// no array, observa as alteracoes nas variaveis de estado 

  return (
    <div>
            <h2>Faça o seu login</h2>
            <h3>{tarefa}</h3>
            <p>Conclua o seu login</p>
            <button onClick={() => setLogado(true)}>Logar</button>
        </div>
  )
}

export default Tarefa