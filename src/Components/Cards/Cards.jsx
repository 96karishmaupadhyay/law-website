import React from 'react'
import styles from "./Cards.module.css"
function Cards({type,img ,title,colorback}) {
switch(type){
    case "success":{
        return(
     <div className={styles.cardWrapper} style={{backgroundColor:colorback}}>
        <div className={styles.imgContainer}><img src={img} alt="img" /></div>
        <div>
        <h3>{title}</h3>
        <p>Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
         consequatduis enim velit mollit Exer.</p>
        <button className={styles.btn}>Read More</button>
        </div>
     </div>
        )
    }
    default: return <></>
}
}

export default Cards
