import React from "react";
import styles from "./Footer.module.css";
import icon from "../../Assets/socialmediaicons.png"
import logo from "../../Assets/logo.png"
function Footer(){
  return (
    <div>
      <div className={styles.footer}>
        <img src={logo} alt="logo" height="24px" />
        <div className={styles.menu}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div><img src={icon} alt="" /></div>
      </div>
      <div className={styles.credits}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;