"use client";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function TeamSlide2() {
  const teamJson = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fsatish-min.jpeg?alt=media&token=f65f20e9-992d-4cd0-a0fe-7b9624fe3553",
      name: "Satis Kumar Saride",
      designation: "Founder & CEO",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Venkat",
      designation: "Product Architect",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fsekhar.jpg?alt=media&token=03bc9e11-ad9b-428d-8bd2-e661d82b42cb",
      name: "Sekhar javvadi",
      designation: "Full Stack Developer",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fhemanth.jpg?alt=media&token=fb20a381-2884-4f31-85be-0095bd3c55e8",
      name: "Hemanth Kumar",
      designation: "Blockchain Developer",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fnaveen.jpeg?alt=media&token=d9c2da83-cebe-4138-a5a8-39ef50f19dd0",
      name: "Naveen Kumar",
      designation: "Product Designer",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Sudhir Kumar",
      designation: "UI/UX Designer",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Ravi Eswarapu",
      designation: "Mentor (business)",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Sekhar javvadi",
      designation: "Mentor (technology)",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="w-[100vw] h-fit pb-6 bg-white flex flex-col items-start justify-start">
      <div className="w-[90%] h-[380px] m-auto">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          infinite={false}
          // autoPlay={true}
        >
          {teamJson.slice(0, 6).map((item, key) => (
            <TeamCard key={key} {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export const TeamCard = ({ image, name, designation }) => {
  return (
    <div className="group  w-[300px] h-[370px] rounded-lg overflow-hidden shadow-md m-2 relative industry-card">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
        src={image}
        alt={name}
      />
      <div className="absolute inset-0 bg-bg1 opacity-10 group-hover:opacity-60 transition-all duration-700 ease-in-out" />
      <div className="absolute bottom-0 px-6 py-4 flex flex-col items-center justify-center w-full">
        <div className="gil-bold text-xl text-slate-200">{name}</div>
        <div className="text-slate-300 text-base">{designation}</div>
        <div className="flex justify-between mt-4 w-[70%] onHoverShow">
          <AiOutlineInstagram className="text-slate-300 cursor-pointer hover:text-[#E1306C] text-3xl" />
          <AiOutlineTwitter className="text-slate-300 hover:text-blue-400 cursor-pointer text-3xl" />
          <AiFillLinkedin className="text-slate-300 hover:text-sky-600 cursor-pointer text-3xl" />
        </div>
      </div>
    </div>
  );
};
