import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
      <div className="container mt-5">
        <div className="row gy-4">
          {Sdata.map((val, ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Service;
