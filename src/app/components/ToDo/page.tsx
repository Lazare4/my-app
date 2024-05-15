"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { log } from "console";
import Saqme from "../Saqme/page"
import { Guid } from 'js-guid';
// type Props = {
//   delete1 : Function;

// }
export default function ToDo() {
  

const [toDo, setToDo] = useState([{txtValue: "sia", key: Guid.newGuid()} ])
const [textValue, setTextValue] = useState("")
const [textColor, setTextColor] = useState(styles.rame0)
function onclick() {
  
    console.log(Guid.newGuid().toString());
      
  if (textValue) {
    if (!toDo.includes(textValue)) {
      setToDo([...toDo, textValue])
      setTextValue("")
    } else  {
      alert("ERROR")
    }
  }

   
}

function delete1(item : string) {
    console.log(item);
    
    console.log("gagimarjos " + item);
    
    setToDo(toDo.filter(e => e !== item))        
        
}


function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}


function onchange(ev) {
    // console.log("gamarjoba");
    setTextValue(ev.target.value); 
   
    
    
}
  function onClickText(ev) {
    // ev.target.className = styles.rame
    setTextColor(styles.rame)
    if (textColor==styles.rame0) {
      setTextColor(styles.rame)
      
    } else
    {
      setTextColor(styles.rame0)
    }

    
  }
  return (
    <div className={styles.main}>
      <div>
        <input type="text" onChange={onchange} value={textValue} />
        <button onClick={onclick}>Damateba</button>
      </div>
      <div>
        {
            toDo.map((a) =>  <Saqme saqmeText={a} delete1={delete1}></Saqme> )
        }
      </div>
    </div>
  );
}
