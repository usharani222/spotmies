import React from "react";
import ClientCarouselLogos from "./reusableComponent/horizontal_scrolling/client_carousel";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className="w-[100vw] h-fit min-h-[100vh] bg-neutral-900">
      <div className="w-[90%] h-[90vh] m-auto py-12">
        <div className="flex flex-row w-full items-start justify-between h-[30%]">
          <div className="flex flex-col items-start justify-center w-fit h-full text-text_color1">
            <p className="gil-med text-7xl ">
              We Are <span className="text-primary">Creative</span>
            </p>
            <div className="flex flex-row w-full items-center pl-4 pt-4">
              <p className="text-4xl gil-med">
                <span className="text-xl gil-reg">Established</span> <br />
                2019
              </p>
              <p className="gil-med text-8xl ml-6">Tech Company</p>
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
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        ></div>
      </div>
      <div className="bg-bg2 w-full h-[40vh] pt-[20vh]">
        <div className="pt-[50px] m-auto w-[90%]">
          <ClientCarouselLogos />
        </div>
      </div>
      <div className="bg-bg2 w-full h-[60vh] py-[5vh]">
        <div className="w-[90%] h-full m-auto flex flex-row items-start justify-between">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-full w-[45%] object-cover rounded-3xl m-auto"
          />
          <div className="flex flex-col w-[55%] h-full items-start justify-between px-8 py-2 text-text_color2">
            <p className="gil-med text-xl">Our Mission</p>
            <p className="gil-bold text-5xl ">
              Why You Should <br /> Choose{" "}
              <span className="text-primary">Spotmies</span>
            </p>
            <p className="gil-reg text-xl text-justify opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              velit magni eius dolor distinctio esse iusto veniam exercitationem
              non,Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="gil-med text-xl text-primary flex items-center">
              Our Mission&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
