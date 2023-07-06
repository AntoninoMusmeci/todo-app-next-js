import React, { FormEventHandler, ReactNode } from 'react'
import styles from './form.module.css'
type Props = {
  children: ReactNode,
  submitHandler: FormEventHandler
  
}

export default function Form({children, submitHandler}: Props) {
  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler}>
      {children}
      </form>
    </div>
  )
}