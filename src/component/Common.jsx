import React from "react";

function Common(props) {
  return (
    <div className="container">
      <div className="banner">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="banner_content">
              <h1>
                {props.title} <span>{props.name}</span>
              </h1>
              <p>{props.para}</p>
              <a href={props.visit}>{props.btn} </a>
            </div>
          </div>
          <div className="col-md-6 banner_sec">
            <div className="banner_img">
              <img src={props.imgsrc} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
