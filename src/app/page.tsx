"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Misalmeba from "./components/Misalmeba/page";
import Naxvamdis from "./components/Naxvamdis/page";
import ToDo from "./components/ToDo/page";
import Counter from "./components/Counter/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <Misalmeba messageType={"Gamarjoba"} messageName={"Gela"} />
      <Misalmeba messageType={"Naxvamdis"} messageName={"Lazare"} />
      <Misalmeba messageType={"Gamarjoba"} messageName={"Levan"} />
      <Naxvamdis messageType={"Gamarjoba"} messageName={"Tamar mefe"} />
      <Counter />
      <ToDo />

      
    </main>
  );
}
