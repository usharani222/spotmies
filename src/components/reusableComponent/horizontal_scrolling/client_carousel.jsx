"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dummyClients } from "@/constants";

export default function ClientCarouselLogos() {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive2}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {dummyClients.map((testimonial, index) => (
          <div key={index}>
            <img
              src={testimonial.image}
              alt=""
              className="cursor-pointer h-[80px] w-[180px] object-contain m-auto hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
