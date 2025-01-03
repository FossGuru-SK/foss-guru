import React from "react";
import Link from "@docusaurus/Link";
import AboutUsTeaser from '@site/static/img/about-us.png';

import styles from "./styles.module.css";

export default function AboutUsCard({ title, highlightText, description, descriptionhighlight, buttonText, link }): JSX.Element {
    return (
        <section className={styles.about_us}>
            <div className={styles.maincontainer}>
                <div className={styles.headercontainer}>
                    <h2 className={styles.title}>{highlightText}</h2>
                    <p className={styles.subtitle}>
                        {title}
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.img_container}>
                        <img className={styles.img} src={AboutUsTeaser} />
                    </div>
                    <div className={styles.information_container}>
                        <p className={styles.description}>
                            <span className={styles.descriptionhighlight}> {descriptionhighlight}</span>{description}
                        </p>
                        <div>
                            <Link className={styles.outlinedbutton} to={link}>
                                {buttonText}
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}
