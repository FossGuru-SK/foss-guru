import React from "react";
import LearningProcessImg from "../../../static/img/fg_logo.svg"; // Replace with your image
import CommunityDiagram from "../../../static/img/fg_logo.svg"; // Replace with your image
import styles from "./styles.module.css";

export default function AboutUsContent() {
  return (
    <section className={styles.about_content}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className="title-h2">Who We Are</h2>
          <p className="description-p">
            FossGuru is your friendly guide to mastering Free and Open Source
            Software (FOSS) technologies. We blend humor, creativity, and
            hands-on examples to make learning fun and effective.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className="title-h2">Our Mission</h2>
          <p className="description-p">
            At FossGuru, our mission is to democratize learning for open-source
            enthusiasts, making technical knowledge accessible and engaging.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className="title-h2">Why Choose Us?</h2>
          <p className="description-p">
            We teach with humor and relatable analogies. Imagine learning Git
            workflows with pizza toppings or Kubernetes with herding pets!
          </p>
          <div className={styles.img_container}>
            <img
              className={styles.img}
              src={LearningProcessImg}
              alt="Learning Process"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className="title-h2">Join the Community</h2>
          <p className="description-p">
            Collaborate with us on GitHub! Share your ideas, raise issues, or
            contribute to our project. Together, we’ll make learning FOSS
            technologies an adventure.{" "}
            <a href="https://github.com/FossGuru-SK/foss-guru/issues">
              Create an issue here
            </a>.
          </p>
          <div className={styles.img_container}>
            <img
              className={styles.img}
              src={CommunityDiagram}
              alt="Community Diagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
