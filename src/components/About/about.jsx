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
      <ul>
        <li>
          <img src="" alt="" />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </li>
      </ul>
      </div>


    </section>
  )
}