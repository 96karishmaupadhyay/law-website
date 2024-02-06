import React from 'react'
import styles from "./Client.module.css"
import Cards from '../Cards/Cards'
import client1 from "../../Assets/client1.png"
import client2 from "../../Assets/client2.png"
import client3 from "../../Assets/client3.png"
import leftArrow from "../../Assets/leftArrow.png"
import rightArrow from "../../Assets/rightArrow.png"
function Client() {
  return (
    <div className={styles.clientContainer}>
      <div className={styles.flex1}>
        <h3>What says our <br/> happy Clients</h3>
     <div className={styles.arrow}>
        <img src={leftArrow} alt="arrow" />
        <img src={rightArrow} alt="arrow" />
     </div>
      </div>
      <div className={styles.flex2}>
        <Cards type="client" title="Jane Cooper" img={client1} colorback="rgba(29, 29, 29, 1)"/>
        <Cards type="client" title="Devone Lane" img={client2} colorback="rgba(71, 71, 71, 0.5)"/>
        <Cards type="client" title="Robert Fox" img={client3} colorback="rgba(29, 29, 29, 1)"/>
      </div>
    </div>
  )
}

export default Client
