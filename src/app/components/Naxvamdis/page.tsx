import { useState } from "react";
import styles from "./page.module.css";
type Props = {
    messageType: "Gamarjoba" | "Naxvamdis";
    messageName: string; 
}
export default function Naxvamdis(props: Props) {

  
    return (
    <div className={styles.textColor}>
        {props.messageType} {props.messageName}
    </div>



  );
}