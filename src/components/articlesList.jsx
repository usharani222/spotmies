"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
  BsArrowUpRightCircle,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { Fade } from "react-reveal";

const ArticlesList = () => {
  const article = [
    {
      when: "29 july, 2022",
      // title about blockchain
      title: "Blockchain Technology Award",
      description:
        "Blockchain Technology Award - Award from A.P Governor for BEST INNOVATIVE AND CREATIVE USE OF TECHNOLOGY. ",
      link: "https://youtu.be/qnCKT_loJPk",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80",
    },
    {
      when: "29 july, 2022",
      // title about blockchain
      title: "Blockchain Technology Award",
      description:
        "Blockchain Technology Award - Award from A.P Governor for BEST INNOVATIVE AND CREATIVE USE OF TECHNOLOGY. ",
      link: "https://youtu.be/qnCKT_loJPk",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80",
    },
    {
      when: "29 july, 2022",
      // title about blockchain
      title: "Blockchain Technology Award",
      description:
        "Blockchain Technology Award - Award from A.P Governor for BEST INNOVATIVE AND CREATIVE USE OF TECHNOLOGY. ",
      link: "https://youtu.be/qnCKT_loJPk",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80",
    },
  ];

  return (
    <div className="min-h-[50vh] h-fit w-[100vw] bg-bg2" id="articles">
      <div className="py-10 w-full text-black gil-reg">
        <div className="w-[90%] m-auto">
          <div className="flex flex-row justify-between items-center w-full pb-8">
            <Fade bottom>
              <p className="gil-bold text-3xl md:text-5xl text-primary2">
                Follow the latest articles & news
              </p>
            </Fade>

            {/* <div className="flex flex-row items-center">
              <BsArrowLeftCircle className="inline-block text-3xl mr-2 text-primary2 cursor-pointer" />
              <BsArrowRightCircleFill className="inline-block text-3xl text-primary2 cursor-pointer" />
            </div> */}
          </div>
          <div className="opacity-40">
            <Fade bottom>
              <p className="w-full md:w-[70%] pb-5 opacity-60 text-sm md:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                aliquid asperiores reprehenderit tempore laboriosam, sunt
                sapiente optio, quos aspernatur esse voluptates doloribus ullam
                delectus. Atque provident architecto autem odio illo!
              </p>
            </Fade>
          </div>
          <Fade>
            <div className="flex flex-col md:flex-row w-full items-center justify-between">
              {article.map((item, index) => (
                <div
                  key={index}
                  className="text-primary2 bg-white flex flex-col items-start justify-between h-fit md:h-[430px] w-full md:w-[400px] rounded-2xl shadow-sm  p-3 md:m-0 m-2"
                >
                  <Fade>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[50%] w-full object-cover rounded-lg"
                    />
                  </Fade>
                  <div className="flex flex-col items-start justify-center pt-4 pl-2">
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="text-xs text-primary2 opacity-70">
                          29 july, 2022
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <p className="text-2xl pb-2 pt-6 text-primary2 gil-med">
                        {item.title}
                      </p>
                    </Fade>
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="opacity-70 text-sm text-primary2">
                          {item.description}
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <div
                        className="flex flex-row items-center justify-start pt-6 pb-2 cursor-pointer"
                        onClick={() => {
                          if (!item.link) return;
                          window.open(item.link, "_blank");
                        }}
                      >
                        <p className="gil-bold text-sm text-primary">
                          KNOW MORE
                        </p>
                        <BsArrowUpRightCircleFill className="inline-block text-md ml-2 text-primary" />
                      </div>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
