/*
  homeProps = {titulo, texto }
*/

interface homeProps {
  titulo: string;
  texto: string;
  numero_turma: number;
  finalizada: boolean;
}
function Home(props: homeProps) {
  return (
    <div>
      <h1>{ props.titulo }</h1>
      <h2>Turma</h2>
      <p>{ props.texto }</p>
    </div>
  )
}

export default Home