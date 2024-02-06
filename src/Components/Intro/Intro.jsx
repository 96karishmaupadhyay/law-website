import React from 'react'
import styles from "./Intro.module.css"
function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.flex1}>
        <p>Let's Introduce Ourself</p>
      </div>
      <hr/>
      <div className={styles.flex2}>
        <p>Criminal Lawyers</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur ipsam non quia aliquam facilis quae rem deserunt voluptatum,
         qui perferendis quaerat minima placeat a.
         Autem et asperiores consequuntur quod iure!</p>
      </div>
    </div>
  )
}

export default Intro
