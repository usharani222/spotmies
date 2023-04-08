"use client";
// import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  FaBuilding,
  FaIndustry,
  FaGlobe,
  FaUsers,
  FaLaptop,
  FaCogs,
} from "react-icons/fa";
import worksJson from "../../json_files/work.json";
import { useEffect, useState } from "react";
import HoverButton from "../reusableComponent/hoverButton";

const manufacturing =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fmanufacturing-min.jpg?alt=media&token=c3a48d7b-9990-45b6-96c0-ac00a252c990";
const retail =
  "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fretail2-min.jpg?alt=media&token=bb104994-13c6-4528-a2fe-4b8930a80100";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/retail-min.jpg?alt=media&token=8178a760-7959-4e00-ada5-af47509104ca
const healthcare =
  "https://images.unsplash.com/photo-1666214276389-393fb7dbc75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fhealth-min.jpg?alt=media&token=11407b8e-ec87-4262-bd07-20d8921ff345";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/health2-min.jpg?alt=media&token=4119cfbe-ef09-4648-8e2f-09492d660b2f
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/health3-min.jpg?alt=media&token=3c573c10-8e0d-4361-9d88-6f304409a4c4
const logistics =
  "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Flogistics3-min.jpg?alt=media&token=1451e0ae-89a1-4c2a-baac-3413b2a35f69";
// https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Flogistics2-min.jpg?alt=media&token=984b6bc3-0c42-4815-b6fc-03b9d8084ee4
// const government = "/assets/images/government.jpg";
const edutech =
  "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fedu-min.jpg?alt=media&token=1b30bc92-ee4e-4979-8281-b2916a171efa";

const IndustriesSection = () => {
  const [filterWork, setFilterWork] = useState([]);
  const industries = [
    {
      icon: <FaBuilding />,
      title: "A Square Go-karting",
      description:
        "As manufacturing evolves to embrace the digital age, we help businesses thrive in the Industry 4.0 era with innovative technology solutions and unparalleled expertise.",
      // image: manufacturing,
      image:
        "https://images.unsplash.com/photo-1639980430320-e97db37f167c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: <FaIndustry />,
      title: "Retail",
      description:
        "We help retail stores stay ahead of the curve with technology-driven solutions that enhance customer experiences and streamline operations.",
      image: retail,
      // image:
      //   "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaGlobe />,
      title: "Health Care",
      description:
        "We empower healthcare providers with technology solutions that improve patient care, optimize workflows, and enhance operational efficiency.",
      image: healthcare,
    },
    {
      icon: <FaUsers />,
      title: "Logistics & Warehouse",
      description:
        "Our logistics and warehouse solutions leverage the latest technology to optimize supply chain operations, reduce costs, and enhance overall efficiency.",
      image: logistics,
    },
    {
      icon: <FaLaptop />,
      title: "Government",
      description:
        "We partner with government agencies to deliver secure, scalable, and cost-effective technology solutions that enable streamlined operations, increased transparency, and improved citizen services.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaCogs />,
      title: "EduTech",
      description:
        "Our innovative edutech solutions help educational institutions transform the way they teach and engage students, creating immersive and effective learning experiences.",
      image: edutech,
    },
  ];
  useEffect(() => {
    setFilterWork(worksJson.slice(0, 4));
  }, []);

  const showMore = () => {
    setFilterWork(worksJson);
  };

  return (
    <div className="w-[100vw] bg-white" id="industries">
      <section className="bg-white py-12 m-auto w-[90%] md:block hidden">
        <div className="container mx-auto w-full">
          <h2 className="text-5xl gil-bold text-text_color2 mb-8 ml-4">
            Our Projects
          </h2>
          <p className="text-sm md:text-lg text-text_color2 opacity-60 text-justify ml-4 w-[60%]">
            Our expertise across various industries will help you to bridge the
            gaps with our innovative solutions
          </p>
          <div className="flex flex-wrap">
            {filterWork.map((industry, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/2 p-6 flex flex-col"
              >
                <div className="flex-2 bg-white overflow-hidden shadow-sm rounded-lg hover:shadow-md relative industry-card">
                  <div className="absolute inset-0 bg-bg1 opacity-20 hover:opacity-70 opacity-layer"></div>
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                    <p className="text-white gil-med text-4xl">
                      {industry?.title}
                    </p>
                    <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                      {industry.description}
                    </p>
                    <BsArrowRight
                      size="2rem"
                      color="white"
                      className="absolute bottom-[20px] right-[30px]  onHoverShow"
                    />
                  </div>

                  <a href="#">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[350px] object-cover mypic "
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filterWork.length !== worksJson.length && (
            <div className="w-full flex flex-row items-center justify-center">
              <HoverButton text={"Show More"} onClick={showMore} />
            </div>
          )}
        </div>
      </section>
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-32 md:hidden block">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl sm:text-5xl gil-bold text-text_color2 mb-8 ml-4">
            Our Projects
          </h2>
          <p className="text-text_color2 opacity-60 text-justify ml-4 md:ml-0 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptate quae voluptates quibusdam
            voluptatibus quos quas quidem quia voluptates quibusdam
          </p>
          <div className="flex flex-wrap mt-8">
            {filterWork.map((industry, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-6 flex flex-col"
                // whileTap={{ scale: 0.95 }}
              >
                <div className="flex-2 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative industry-card">
                  <div className="absolute inset-0 bg-bg1 opacity-20 hover:opacity-70 opacity-layer"></div>
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                    <p className="text-white gil-med text-3xl sm:text-4xl">
                      {industry.title}
                    </p>
                    <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                      {industry.description}
                    </p>
                    <BsArrowRight
                      size="2rem"
                      color="white"
                      className="absolute bottom-4 right-4 onHoverShow"
                    />
                  </div>

                  <a href="#">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-52 md:h-60 object-cover mypic"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filterWork.length !== worksJson.length && (
            <div className="w-full flex flex-row items-center justify-center">
              <HoverButton text={"Show More"} onClick={showMore} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndustriesSection;
