import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task ({id, title, isComplete}) {

  return (
    <div className={styles.toDo}>
      <div className={styles.contentTask}>
        <input type='checkbox' defaultChecked={isComplete}/>
        <p>{title}</p>
      </div>

      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}