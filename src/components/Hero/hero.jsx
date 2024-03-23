import React from 'react'
import { getImageUrl } from "../../../utils";

export const hero = () => {
  return 
  <section className={Styles.container}>
    <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Ada</h1>
        <p className={Styles.description}>I'm a fullstack developer with 1 year of experience in React</p>
    <a href="mail to:mymail@gmail.com" className={Styles.contactBtn}>Contact Me</a>
    </div>
    <img src= {getImageUrl("hero/heroImage.png") } alt="Hero Image" className={Styles.heroImg}/>
    <div className={StyleSheet.topBlur} />
    <div className={StyleSheet.bottomBlur} />
    </section>;
    
  
}
