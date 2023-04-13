import React from "react";
import LandingSlide from "./landing_slide";
import AboutUs from "./aboutUs";
import Services from "./services";

import FooterBar from "./footer";

import ArticlesList from "./articlesList";
import ContactUs from "./contactUs";
import Faq from "./faq";
import TeamSlide from "./team";
import TeamSlide2 from "./team2";
import PortfolioSection from "./Work/work2";
import Mentors from "./mentors";

export default function HomePage() {
  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      <Services />
      <PortfolioSection />
      <AboutUs />
      <TeamSlide />
      <TeamSlide2 />
      <Mentors />

      <ArticlesList />
      {/* <ContactUs /> */}
      <Faq />
      <ContactUs />
      <FooterBar />
      {/* <Works /> */}
    </div>
  );
}
