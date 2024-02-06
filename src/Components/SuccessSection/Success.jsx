import React from 'react'
import Cards from '../Cards/Cards'
import gif from "../../Assets/gift.png"
import styles from "./Success.module.css"
function Success() {
  return (
    <div className={styles.successContainer}>    
    <div className={styles.text}><h2>Why Choose us?</h2></div>
    <div className={styles.successCards}>
    <Cards type="success" title="98% Success Rate"  img={gif} colorback="rgba(29, 29, 29, 1)"/>
      <Cards type="success" title="100% Success Rate"  img={gif}  colorback="rgba(71, 71, 71, 0.5)"/>
      <Cards type="success" title="99% Success Rate"  img={gif} colorback="rgba(29, 29, 29, 1)"/>
    </div>
      
    </div>
  )
}

export default Success
