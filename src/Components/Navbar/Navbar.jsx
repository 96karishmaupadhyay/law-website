import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../../Assets/logo.png"
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div><img src={logo} alt="" /></div>
      <div className={styles.span}>
        <span>Home</span>
        <span>Attornies</span>
        <span>Practices Area</span>
        <span>About us</span>
      </div>
      <div>
        <button className={styles.btn}>Contact Now</button>
      </div>
    </div>
  )
}

export default Navbar
