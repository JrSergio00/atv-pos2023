import Logo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

const AppNavBar = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo do React" />
        <h1>Lista de tarefas</h1>
      </header>
    </>
  )
}

const AppTaskEdit = (props: any) => {
  return (
    <div className='addTask'>
      <input type='text' 
      placeholder="Digite uma tarefa" 
      value={props.valor} 
      onChange={props.mudanca} />
      <button onClick={props.adicionar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  )
}

const AppTaskList = (props: any) => {
  return (
    <>
      <ul>
        {props.data.map((item: string, indice: number) => (<li key={indice}>{item}</li>))}
      </ul>
    </>
  )
}

const App = () => {

  const MudarTexto = (e: any) => setTarefa(e.target.value)
  const [tarefa, setTarefa] = useState("")
  const [tarefas, setTarefas] = useState([
    "Prototipar interface do usuário",
    "Implementar com HTML a interface com o usário em React",
    "Extrair componentes React da implementação HTML",
    "Transferir os dados do HTML dos componentes React para variáveis",
    "Modificar os dados de variáveis para estado ou propriedades de componentes",
    "Elevar os estados dos componentes quando tiver dados compartilhados",
    "Programar a modificação dos estados",
  ])
  const Adicionar = () => {
    const lista = tarefas
    lista.push(tarefa)
    setTarefas(lista)
    setTarefa("")
  }

  return (
    <>
      <AppNavBar />
      <main>
        <AppTaskEdit
          valor={tarefa}
          mudanca={MudarTexto}
          adicionar={Adicionar}
        />
        <AppTaskList data={tarefas} />
      </main>
    </>
  )
}

export default App
