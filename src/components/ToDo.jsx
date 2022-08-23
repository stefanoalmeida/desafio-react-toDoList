import { Trash } from 'phosphor-react'

import styles from './ToDo.module.css'

export function ToDo ({id, title, isComplete, onComplete, onDeleteTask}) {

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  function handleIsComplete() {
    onComplete(id)
  }

  return (
    <div className={styles.toDo}>
      <div className={styles.contentTask}>
        <input type='checkbox' onClick={handleIsComplete} defaultChecked={isComplete} />
        <p className={isComplete ? `${styles.checked}` : ''}>{title}</p>
      </div>

      <button>
        <Trash 
          size={24}
          onClick={handleDeleteTask}
        />
      </button>
    </div>
  )
}