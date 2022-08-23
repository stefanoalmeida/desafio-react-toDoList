import { PlusCircle } from 'phosphor-react'
import ClipBoard from './../assets/Clipboard.svg'

import {v4 as uuidV4} from 'uuid'

import { ToDo } from './ToDo'

import styles from './Task.module.css'
import { useState } from 'react'

export function Task () {

  const [task, setTask] = useState([])

  const [newToDoText, setNewToDoText] = useState("")

  function handleNewTask() {
    event.preventDefault()

    if (!newToDoText) return

    const newTask = {
      id: uuidV4(),
      title: newToDoText,
      isComplete: false
    }

    setTask([...task, newTask])
    setNewToDoText('')
  }

  function handleNewToDoText() {
    setNewToDoText(event.target.value)
  }

  function handleToggleTaskCompletion(id) {
    const newTasks = task.map(t => t.id === id ? {
      ...t,
      isComplete: !t.isComplete
    }: t)

    setTask(newTasks)
  }

  function deleteTask(id){
    const tasksWithoutDeleteOne = task.filter(task => task.id !== id)

    setTask(tasksWithoutDeleteOne)
  }

  const numberOfTasksComplete = task.filter (t => t.isComplete === true).length

  return (
    <div className={styles.content}>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input 
            type="text" 
            name="tasks" 
            value={newToDoText} 
            onChange={handleNewToDoText} 
            placeholder='Adicione uma nova tarefa'
          />

          <button>
            Criar
            <PlusCircle size={16} weight='bold'/>
          </button>
        </form>

        <div className={styles.toDoList}>
          <div className={styles.headerList}>
            <strong>Tarefas criadas <span>{task.length}</span></strong>
            <strong>Concluídas <span>{`${numberOfTasksComplete} de ${task.length}`}</span></strong>
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
                  id={t.id}
                  title={t.title}
                  isComplete={t.isComplete}
                  onComplete={handleToggleTaskCompletion}
                  onDeleteTask={deleteTask}
                />
              )
            })}
        </div>
    </div>
  )
}