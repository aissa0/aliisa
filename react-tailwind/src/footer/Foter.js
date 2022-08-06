import React from "react";
import Frote2 from "./Frote2";
import Foter3 from "./Foter3";

function Foter() {
  return (
    <div className="text-dblack">
      <div className=" bg-white  bg-opacity-5 w-screen border-y border-slate-300">
        <div className="container flex-row md:flex py-2 md:py-8  justify-between items-center">
          <div className="mx-4 mb-5">
            <h1 className="font-semibold text-sm text-center md:text-xl">
              We’re Always Here To Help
            </h1>
            <p className=" font-light text-xs text-center">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="flex  mx-24 md:mx-0 mb-3  border-b md:border-0 border-dinputBorder border-opacity-20  items-center">
            <i className="bi bi-headphones w-9 h-9 rounded-full text-center border border-dinputBorder bg-white mr-4 leading-9"></i>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm">Phone Support</span>
              <span className="text-xl">70464748</span>
            </div>
          </div>
          <div className="flex mx-24 md:mx-0 mb-3 border-b md:border-0 border-dinputBorder border-opacity-20 items-center">
            <a
              href="mailto:info@ishtari.com"
              className="flex items-center justify-center"
            >
              <i className="bi bi-envelope text-xl w-9 h-9 rounded-full text-center border border-dinputBorder bg-white mr-4 leading-9"></i>

              <div className="flex flex-col items-center justify-center">
                <span className="text-sm">Email Support</span>
                <span className="text-xl">Send Mail</span>
              </div>
            </a>
          </div>
          <div className="flex mx-24  items-center">
            <a href="https://api.whatsapp.com/send?phone=+96170464748&amp;text=Hi%20there%20i%27m%20interested%20in%20https://www.ishtari.com">
              <div className="flex items-center justify-center">
                <i className="bi bi-whatsapp  w-9 h-9 rounded-full text-center border border-dinputBorder bg-white mr-4 leading-9"></i>
                <div className="flex flex-col items-center justify-center">
                  {" "}
                  <span className="text-xl">Whatsapp Us</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
        <Frote2/>
        <Foter3/>
    </div>
  );
}

export default Foter;
