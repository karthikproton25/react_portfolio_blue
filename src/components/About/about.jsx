import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}></h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}
        />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I'm a front end developer</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I build backsystems</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
          <div>
            <h3>UI Designer</h3>
            <p>I design apps and webpages</p>
          </div>
        </li>
      </ul>
      </div>


    </section>
  )
}