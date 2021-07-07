import React from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={styles.ContactSection}>
      <div className={styles.Titles}>
        <h2 className={styles.Title}>Get in touch!</h2>
      </div>
      <div className={styles.SocialCards}>
        <div>
          <MdEmail size="50" />
          <p>doniagv@gmail.com</p>
        </div>
        <div className={styles.SocialCard}>
          <AiOutlineGithub size="50" />
          <p>
            <a
              href="https://github.com/doniagv"
              target="_blank"
              rel="noopener noreferrer"
            >
              doniagv
            </a>
          </p>
        </div>
        <div>
          <AiFillLinkedin size="50" />
          <p>
            <a
              href="https://www.linkedin.com/in/javier-andoni-gonz%C3%A1lez-v%C3%A1zquez-852572124/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Javier González
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
