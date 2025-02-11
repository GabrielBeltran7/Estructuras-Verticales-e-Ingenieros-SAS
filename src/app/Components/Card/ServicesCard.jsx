"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesCard({ services }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: 345,
              height: 520,
              display: "flex",
              flexDirection: "column",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
              sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "justify",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


