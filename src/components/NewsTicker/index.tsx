import React from "react";
import Link from "@docusaurus/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { newsTitles } from "../../../utils/newsTitles";

import styles from "./styles.module.css";

export default function NewsTicker() {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
  };

  const NewsTickerCard = ({date, title, blogLink}) => {
    return (
      <Link className={styles.slider_item} to={blogLink}>
        <div className={styles.date}>
          {date}
        </div>

        <div className={styles.introduction}>
          <strong>{title}</strong>
        </div>

        <div className={styles.arrow_container}>
          <div className={styles.arrow}>
            -&gt;
          </div>
        </div>
      </Link>
    )
  }

  return (
    <section className={styles.news_ticker}>
      <div className={styles.container}>
        <div className={styles.button_container}>
          <Link className={styles.button} to="/blog">
            News
          </Link>
        </div>

        <div className={styles.carousel_container}>
          <Slider {...settings} className={styles.slider}>
            {
              newsTitles.map((newPost, index)=> {
                return (
                  <NewsTickerCard key={index} {...newPost}/>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </section>
  );
}
