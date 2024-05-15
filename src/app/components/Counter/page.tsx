import { useState } from "react";
import styles from "./page.module.css";
export default function Counter() {
  const [counter, setCount] = useState(0)
  function plus() {
    setCount(counter + 1)
    
  }

  function minus() {
    setCount(counter - 1)
    
  }

  
    return (
    <div className={styles.textColor}>
        <span className={styles.plusminusZoma} onClick={minus}>-</span>
        <span className={styles.ricxvisZoma}  >{counter}</span> 
        <span className={styles.plusminusZoma} onClick={plus}>+</span>

    </div>



  );
}