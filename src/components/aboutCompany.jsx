import React from "react";
import Wrapper from "./reusableComponent/wrapper";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Our Company
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Nulla facilisi. Nulla libero neque, porta ac consectetur vel,
              ullamcorper eget nulla. Praesent malesuada urna nisi, quis
              volutpat erat hendrerit non. Nam vitae fermentum ligula. Mauris ac
              euismod justo.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://picsum.photos/800/600"
                  alt="Team"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
              </div>
              <div className="relative px-8 py-10">
                <h3 className="text-lg font-medium text-white">Our Team</h3>
                <p className="mt-4 max-w-2xl text-md text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AboutCompany() {
  return (
    <Wrapper title={"Title"} className="bg-white h-[100vh]">
      <AboutUs />
    </Wrapper>
  );
}

export default AboutCompany;
