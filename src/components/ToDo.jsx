import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './ToDo.module.css'

export function ToDo ({id, title}) {

  const [isChecked, setIsChecked] = useState(false)

  function handleIsComplete() {
    setIsChecked(state => !state)
  }

  return (
    <div className={styles.toDo}>
      <div className={styles.contentTask}>
        <input type='checkbox' id={id} onClick={handleIsComplete} className={isChecked ? "checked" : "noChecked"} value={isChecked}/>
        <p>{title}</p>
      </div>

      <button>
        <Trash 
          size={24}
        />
      </button>
    </div>
  )
}