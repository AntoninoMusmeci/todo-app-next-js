import React, { useState } from "react";
import styles from '@/styles/form.module.css'
export default function addtodo() {

  return (
    <div  className={styles.signin_form}>
    <form>
      <h1 > Login </h1>
      <input type="email" placeholder="email" />
      <input type="password" />
      <button type="submit" > Login </button>
    </form>
  </div>
  );
}
