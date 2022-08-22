import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './ToDo.module.css'

export function ToDo ({title, onDeleteTask}) {

  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask(){
    onDeleteTask(title)
  }

  function handleIsComplete() {
    setIsChecked(state => !state)
  }

  return (
    <div className={styles.toDo}>
      <div className={styles.contentTask}>
        <input type='checkbox' onClick={handleIsComplete} defaultChecked={isChecked} />
        <p className={isChecked ? `${styles.checked}` : ''}>{title}</p>
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