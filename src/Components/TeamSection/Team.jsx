import React from 'react'
import styles from "./Team.module.css"
import Cards from '../Cards/Cards'
import member1 from "../../Assets/member1.png"
import member2 from "../../Assets/member2.png"
import member3 from "../../Assets/member3.png"
import member4 from "../../Assets/member4.png"
import member5 from "../../Assets/member5.png"
import member6 from "../../Assets/member6.png"
function Team() {
  return (
    <div className={styles.teamContainer}>
    <h2>Our Team</h2>
    <div className={styles.teamCard}>
        <Cards type="team" title="Daniel Def" img={member1} />
        <Cards type="team" title="Sanfole" img={member2} colorback="rgba(227, 183, 72, 1)"/>
        <Cards type="team" title="Cesforila" img={member3}/>
        <Cards type="team" title="Collean" img={member4}/>
        <Cards type="team" title="Haldone" img={member5}/>
        <Cards type="team" title="Nick Joe" img={member6}/>
    </div>
      
    </div>
  )
}

export default Team
