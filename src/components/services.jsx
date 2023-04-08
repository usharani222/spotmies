import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  return (
    <div className="w-[100vw] h-[100vh] bg-bg2" id="services">
      <div className="flex flex-col justify-center w-[90%] h-full py-[8%] m-auto">
        <p className="gil-bold text-6xl text-left pb-12 text-text_color2">What We Offer</p>
        <div className="w-full h-full m-auto flex flex-row items-center justify-center ">
          <div className="flex flex-col items-center justify-center h-full w-[70%]">
            <div className=" w-full h-[60%] bg-red-300 rounded-xl mb-6 relative industry-card">
              {dataInsideDiv({
                title: "Product Design",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image:
                  "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
              })}
            </div>
            <div className="w-full h-[40%] flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center w-[50%] h-full bg-blue-100 rounded-xl mr-6 industry-card relative">
                {dataInsideDiv({
                  title: "Web Development",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image:
                    "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                })}
              </div>
              <div className="flex flex-col items-center justify-center w-[50%] h-full bg-green-100 rounded-xl industry-card relative">
                {dataInsideDiv({
                  title: "Blockchain & Web3",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image:
                    "https://images.unsplash.com/photo-1639152446002-ffd04bd3d529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full ml-6 w-[30%]">
            {/* this div contains 2 div, 1st one is 40% 2nd one is 60% heights respectively */}
            <div className="flex flex-col items-center justify-center w-full h-[30%] bg-yellow-100 rounded-xl mb-6 industry-card relative">
              {dataInsideDiv({
                title: "Desktop Development",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                image:
                  "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80",
              })}
            </div>
            <div className="flex flex-col items-center justify-center w-full h-[70%] bg-pink-100 rounded-xl industry-card relative">
              {dataInsideDiv({
                title: "Mobile Development",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image:
                  "https://images.unsplash.com/photo-1628233345409-349459e6f79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function dataInsideDiv({ title, description, image }) {
    return (
      <>
        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-40 opacity-layer rounded-xl" />
        <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
          <p className="text-white gil-bold text-3xl">{title}</p>
          <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
            {description}
          </p>
          <BsArrowRight
            size="2rem"
            color="white"
            className="absolute bottom-[20px] right-[30px]  onHoverShow"
          />
        </div>
        <img
          src={image}
          alt="pic"
          className="w-full h-full object-cover rounded-xl"
        />
      </>
    );
  }
}
