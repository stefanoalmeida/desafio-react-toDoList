import { PlusCircle } from 'phosphor-react'
import {v4 as uuidV4} from 'uuid'

import { Header } from './components/Header'
import { Task } from './components/Task'

import ClipBoard from './assets/Clipboard.svg'

import styles from './App.module.css'

import './global.css'

const task = [
  {
    id: uuidV4(),
    title: "Finalizar projeto",
    isComplete: true
  },
  {
    id: uuidV4(),
    title: "Estudar JavaScript",
    isComplete: false
  }
]

export function App() {

  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>

          <button>
            Criar
            <PlusCircle size={16} weight='bold'/>
          </button>
        </form>

        <div className={styles.toDoList}>
          <div className={styles.headerList}>
            <strong>Tarefas criadas <span>0</span></strong>
            <strong>Concluídas <span>0</span></strong>
          </div>

          {task == "" ? (
            <div className={styles.main}>
            <img src={ClipBoard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          ): task.map(task => {
            return (
              <Task
                key={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
            )
          })}

        </div>
      </div>
    </div>
  )
}
