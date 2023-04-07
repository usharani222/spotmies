import React from "react";
import LandingSlide from "./landing_slide";
import AboutUs from "./aboutUs";

export default function HomePage() {
  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      <AboutUs />
      <LandingSlide />
    </div>
  );
}
