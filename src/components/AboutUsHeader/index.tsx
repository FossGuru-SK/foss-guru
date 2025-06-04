import React from "react";
import FossGuruSvg from "@site/static/img/fg_logo.svg"; // Replace with your logo
import styles from "./styles.module.css";

export default function AboutUsHeader() {
  return (
    <header className={styles.about_header}>
      <div className={styles.container}>
        {/* <div className={styles.svg_container}>
          <FossGuruSvg className={styles.svg} />
        </div> */}
        <div className={styles.information_container}>
          <h1 className="headers-title-h1">About FossGuru</h1>
          <p className="headers-subtitle-p">
            Welcome to FossGuru—where FOSS technologies meet fun and learning.
          </p>
        </div>
      </div>
    </header>
  );
}
