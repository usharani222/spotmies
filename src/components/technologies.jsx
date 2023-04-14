"use client";
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiSolidity } from "react-icons/si";

export default function TechSlide() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Technologies We Use
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Build with the Latest Technologies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We leverage the most innovative and cutting-edge technologies to
            deliver robust and scalable solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="relative flex justify-center items-center px-8 py-6 bg-white rounded-lg shadow-md">
              <FaReact className="w-8 h-8 text-[#61DAFB] absolute top-0 left-0 ml-4 mt-4" />
              <h3 className="text-lg font-medium text-gray-900">React JS</h3>
            </div>
            <div className="relative flex justify-center items-center px-8 py-6 bg-white rounded-lg shadow-md">
              <FaNodeJs className="w-8 h-8 text-[#68A063] absolute top-0 left-0 ml-4 mt-4" />
              <h3 className="text-lg font-medium text-gray-900">Node.js</h3>
            </div>
            <div className="relative flex justify-center items-center px-8 py-6 bg-white rounded-lg shadow-md">
              <SiMongodb className="w-8 h-8 text-[#13AA52] absolute top-0 left-0 ml-4 mt-4" />
              <h3 className="text-lg font-medium text-gray-900">MongoDB</h3>
            </div>
            <div className="relative flex justify-center items-center px-8 py-6 bg-white rounded-lg shadow-md">
              <SiFlutter className="w-8 h-8 text-[#0075c2] absolute top-0 left-0 ml-4 mt-4" />
              <h3 className="text-lg font-medium text-gray-900">Flutter</h3>
            </div>
            <div className="relative flex justify-center items-center px-8 py-6 bg-white rounded-lg shadow-md">
              <SiSolidity className="w-8 h-8 text-[#363636] absolute top-0 left-0 ml-4 mt-4" />
              <h3 className="text-lg font-medium text-gray-900">Solidity</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
