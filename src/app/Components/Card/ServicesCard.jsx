"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ServicesCard.module.css";

export default function ServicesCard({ services }) {
  // Función para truncar el texto al 80% del total de caracteres
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <article className={styles.card}>
            <img
              className={styles.media}
              src={service.image}
              alt={service.title}
              loading="lazy"
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>
                {truncateText(
                  service.description,
                  Math.floor(service.description.length * 0.8)
                )}
              </p>
              <a className={styles.button} href={service.link}>
                Ver más
              </a>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
