import React from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={styles.ContactSection}>
      <div className={styles.Titles}>
        <h2 className={styles.Title}>Get in touch!</h2>
        <h3 className={styles.Subtitle}>Contact me if you want a quote</h3>
      </div>
      <div className={styles.SocialCards}>
        <div>
          <MdEmail size="50" />
          <p>doniagv@gmail.com</p>
        </div>
        <div className={styles.SocialCard}>
          <AiOutlineGithub size="50" />
          <p>doniagv</p>
        </div>
        <div>
          <AiFillLinkedin size="50" />
          <p>Javier González</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
