import React from "react";
import banner from "../images/banner.png";
import Common from "./Common";

function Home() {
  return (
    <Common
      title="Grow Your Business With"
      name="Nk Technology"
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis."
      imgsrc={banner}
      btn=" Our Services"
      visit="/service"
    />
  );
}

export default Home;
