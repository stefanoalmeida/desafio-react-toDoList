import { PlusCircle } from 'phosphor-react'
import ClipBoard from './../assets/Clipboard.svg'

import {v4 as uuidV4} from 'uuid'

import { ToDo } from './ToDo'

import styles from './Task.module.css'
import { useState } from 'react'

export function Task () {

  const [task, setTask] = useState([])

  const [newToDoText, setNewToDoText] = useState("")

  const [isComplete, setIsComplete] = useState(false)

  function handleNewTask() {
    event.preventDefault()

    setTask([...task, newToDoText])
    setNewToDoText('')
  }

  function handleNewToDoText() {
    setNewToDoText(event.target.value)
  }

  function deleteTask(taskToDelete){
    const tasksWithoutDeleteOne = task.filter(task => {
      return task !== taskToDelete
    })

    setTask(tasksWithoutDeleteOne)
  }

  return (
    <div className={styles.content}>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input type="text" name="tasks" value={newToDoText} onChange={handleNewToDoText} placeholder='Adicione uma nova tarefa'/>

          <button>
            Criar
            <PlusCircle size={16} weight='bold'/>
          </button>
        </form>

        <div className={styles.toDoList}>
          <div className={styles.headerList}>
            <strong>Tarefas criadas <span>{task.length}</span></strong>
            <strong>Concluídas <span>{`0 de ${task.length}`}</span></strong>
          </div>
            {task == "" ? (
              <div className={styles.main}>
                <img src={ClipBoard} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ): task.map(t => {
              return (
                <ToDo
                  key={uuidV4()}
                  title={t}
                  onDeleteTask={deleteTask}
                />
              )
            })}
        </div>
    </div>
  )
}