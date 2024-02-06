import React from 'react'
import styles from "./HeroSection.module.css"
import heroImage from "../../Assets/hero.png"
function Herosection() {
  return (
    <div className={styles.heroContainer}>
    <div className={styles.text}>
     <h2>
     You don't have to <br/><b> Fight them Alone.</b>
     </h2>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
      curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
      hac massa gravida arcu interdum proin curae.</p>
     <div className={styles.inputContainer}>
     <input type="text" placeholder='Enter Your Email here' className={styles.input} />
     <button className={styles.btn}>Let's talk</button>
     </div>
    </div>
    <div className={styles.img} >
        <img src={heroImage} alt="heroImage"  />
    </div> 
      
    </div>
  )
}

export default Herosection
