import React from 'react'
import styles from "./Image.module.css"
import grid1 from "../../Assets/grid1.png"
import grid2 from "../../Assets/grid2.png"
import grid3 from "../../Assets/grid3.png"
import grid4 from "../../Assets/grid4.png"
import grid5 from "../../Assets/grid5.png"
import grid6 from "../../Assets/grid6.png"
function Image() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.text}><h3>Area of Practices</h3></div>
      <div className={styles.imageflex}>
        <img src={grid1} alt="img"  />
        <img src={grid2} alt="img"  />
        <img src={grid3} alt="img"  />
        <img src={grid4} alt="img" />
        <img src={grid5} alt="img"  />
        <img src={grid6} alt="img"  />
      </div>
    </div>
  )
}

export default Image
