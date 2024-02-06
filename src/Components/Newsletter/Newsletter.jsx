import React from 'react'
import styles from "./Newsletter.module.css"
function Newsletter() {
  return (
    <div className={styles.container}>
          <div className={styles.newsletterContainer}>
    <div> <h3>Subscribe Our Newsletter</h3></div>
      
      <div className={styles.inputContainer}>
      <input type="text" />
      <input type="text" />
      <button>Send</button>
      </div>

    </div>
    </div>

  )
}

export default Newsletter
