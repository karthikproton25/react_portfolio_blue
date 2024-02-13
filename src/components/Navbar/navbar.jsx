import React from "react";
import styles from "./navbar.module.css";

export const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a  className={styles.title} href="/">Portfolio</a>
      <div>
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