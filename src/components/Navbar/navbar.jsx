import React, {useState} from "react";
import styles from "./navbar.module.css";
import {getimageURL} from "../../utils";

export const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a  className={styles.title} href="/">Portfolio</a>
      
      <div className={styles.menu}>
      <img className = {menuBtn} src={getimageURL("nav/menuIcon.png")} alt="menu button" />
        <ul className={styles.menu}>
          <li className={styles.menuitems}>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );

};