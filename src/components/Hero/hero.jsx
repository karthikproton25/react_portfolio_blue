import React from 'react'
import { getImageUrl } from "../../../utils";

export const hero = () => {
  return <section>
    <div>
        <h1>Hi, I'm Ada</h1>
        <p>I'm a fullstack developer with 1 year of experience in React</p>
    <a href="mail to:mymail@gmail.com">Contact Me</a>
    </div>
    <img src="{getImageUrl"{"hero/heroImagepng"} alt="Hero Image" />
    <div className={StyleSheet.topBlur} />
    <div className={StyleSheet.bottomBlur} />
    </section>;
    
  
}
