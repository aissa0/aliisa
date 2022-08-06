import React from "react";
import Slider from "react-slick";
import Pageiteam2 from "../page/Pageiteam2";
import Loog from "../page/WhatsApp Image 2022-05-22 at 3.34.10 PM.jpeg";

export default function Sledrproduct() {
  const settings = {
    className: "",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 9,
    swipeToSlide: true,
    afterChange: function (index) {

    },
  };
  return (
    <div>
      <div className=" my-2 md:my-8 container">
        <h2 className=" font-semibold text-2xl py-2 text-dblack mb-1 md:mb-4">
          Related products
        </h2>
        
          <Slider {...settings}>
          
            <Pageiteam2 />
          </Slider>
        
      </div>
    </div>
  );
}
