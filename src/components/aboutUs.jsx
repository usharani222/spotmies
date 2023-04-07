"use client";
import React from "react";
import ClientLogos from "./reusableComponent/horizontal_scrolling/client_logo_scrolling";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dummyClients } from "@/constants";

export default function AboutUs() {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
    <div className="w-[100vw] h-fit min-h-[100vh] bg-neutral-900">
      <div className="w-[90%] h-[90vh] m-auto py-12">
        <div className="flex flex-row w-full items-start justify-between h-[30%]">
          <div className="flex flex-col items-start justify-center w-fit h-full text-text_color1">
            <p className="gil-med text-8xl ">
              We Are <span className="text-primary">Creative</span>
            </p>
            <div className="flex flex-row w-full items-center pl-4 pt-4">
              <p className="text-4xl gil-med">
                <span className="text-xl gil-reg">Established</span> <br />
                2019
              </p>
              <p className="gil-med text-8xl ml-6">Digital Agency</p>
            </div>
          </div>
          <div className="h-[50%] w-[1px] opacity-50 bg-bg2" />
          <div className="flex flex-col w-[30%] items-center justify-between text-text_color1 h-full">
            <p className="text-justify opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              velit magni eius dolor distinctio esse iusto veniam exercitationem
              non,
            </p>
            <div className="flex flex-row w-full items-center justify-between pt-[5%]">
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">100+</p>
                <p className="gil-reg text-md">Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">100+</p>
                <p className="gil-reg text-md">Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">100+</p>
                <p className="gil-reg text-md">Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[70vh] object-cover rounded-3xl mt-[10vh]"
          // background image with parallax effect
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        ></div>
        {/* <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-[70vh] object-cover rounded-3xl mt-[10vh]"
        /> */}
      </div>
      <div className="bg-slate-200 w-full h-[40vh] pt-[20vh]">
        {/* <ClientLogos /> */}
        <div className="pt-[50px] m-auto w-[90%]">
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
        </div>
      </div>
    </div>
  );
}
