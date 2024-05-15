import { useState } from "react";
import styles from "./page.module.css";
type Props = {
    saqmeText : string;
    delete1 : Function;

   
}
export default function Saqme(props: Props){
    function delete1(item : string) {
        console.log("naxvamdis");
        
        props.delete1(item)
        
    }
    function onclick(ev) {
        if (textColor==styles.rame0) {
            setTextColor(styles.rame)
            
          } else
          {
            setTextColor(styles.rame0)
          }

    }
    function onclick1(ev) {
        console.log(props.saqmeText);
        
        console.log("gamarjoba");
        
        delete1(props.saqmeText)
      
    }
    const [textColor, setTextColor] = useState(styles.rame0)
  return (
    <div>
        <span className={styles.delete} onClick={onclick1}>X</span>
        <span className={textColor} onClick={onclick}>
        {props.saqmeText} 
        
        </span>
     </div>
  );
}
//es ori spani vaqciot 2 komponentad delete saqme da saqme shinaarsi