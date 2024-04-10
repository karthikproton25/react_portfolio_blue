import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils"

export const experience = () => {
  return ( 
  <section className={styles.container} id="experience">
    <h2> className={styles.title} Experience</h2>
    <div {styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) =>{
            return (
            <div id={key} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skills.title}</p>
            </div>
            );
            })}
      </div>
        <ul></ul>
    </div>
  </section>
  );
}
