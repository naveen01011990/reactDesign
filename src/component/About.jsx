import React from "react";
import Common from "./Common";
import aboutImg from "../images/about.png";

function About() {
  return (
    <>
      <Common
        title="Welcome to About Page"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis."
        imgsrc={aboutImg}
        btn=" Contact Us"
        visit="/contact"
      />
    </>
  );
}

export default About;
