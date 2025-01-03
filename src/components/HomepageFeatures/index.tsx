import React from "react";
import Link from "@docusaurus/Link";
import NewsTicker from "../NewsTicker";

import styles from "./styles.module.css";

export default function HomePageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <br />
          Foss Guru
        </h1>
        <div className={styles.subtitle_box}>
          <p className={styles.subtitle}>
            Empower your programming journey with us
          </p>
        </div>
      </div>
      <NewsTicker />
    </header>
  );
}
