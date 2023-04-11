import React from "react";
import {
    AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function TeamSlide2() {
  const teamJson = [
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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

  return (
    <div className="w-[100vw] h-fit min-h-[100vh] bg-white flex flex-col items-center justify-center">
      <div className="w-[100%] h-[100%] flex flex-wrap items-center justify-center m-auto pb-4">
        {
          teamJson.map((item, key) => (
            <TeamCard key={key} {...item} />
          ))
          // TeamCard({
          //   image:
          //     "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          //   name: "Sekhar javvadi",
          //   designation: "Co-Founder",
          //   social: {
          //     facebook: "https://www.facebook.com/",
          //     twitter: "https://twitter.com/",
          //     linkedin: "https://www.linkedin.com/",
          //   },
          // }
          // )
        }
      </div>
    </div>
  );
}

const TeamCard = ({ image, name, designation }) => {
  return (
    <div className="group  w-full h-[350px] sm:w-1/2 md:w-1/3 lg:w-1/5 rounded-lg overflow-hidden shadow-md m-2 relative">
      <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out" src={image} alt={name} />
      <div className="absolute inset-0 bg-bg1 opacity-30 group-hover:opacity-60 transition-all duration-700 ease-in-out" />
      <div className="absolute bottom-0 px-6 py-4 flex flex-col items-center justify-center w-full">
        <div className="gil-bold text-xl mb-2 text-slate-200">{name}</div>
        <div className="text-slate-300 text-base">{designation}</div>
        <div className="flex justify-between mt-4 w-[70%]">
          <AiOutlineInstagram className="text-slate-300 cursor-pointer hover:text-[#E1306C] text-3xl" />
          <AiOutlineTwitter className="text-slate-300 hover:text-blue-400 cursor-pointer text-3xl" />
          <AiFillLinkedin className="text-slate-300 hover:text-blue-600 cursor-pointer text-3xl" />
        </div>
      </div>
    </div>
  );
};
