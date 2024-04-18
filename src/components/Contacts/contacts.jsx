import React from "react";
import styles from "./contact.module.css"
import { getImageUrl } from "../../utils"

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
              <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:myemail@email.com">myemail@email.com</a>
              </li>
              <li className={styles.link}>
                <img src={getImageUrl("contact/LinkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
              </li>
              <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://www.github.com/myname">github.com/myname</a>
              </li>
                
            </ul>
        </footer>
    );
};