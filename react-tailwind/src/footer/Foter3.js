import React from "react";
import Google from "../assets/images/google (1).png";
import appStore from "../assets/images/aivalable.png";
import Facebook from "../assets/images/001-facebook.png";
import Youtube from "../assets/images/001-youtube.png"
import './footer2.css'

function Foter3() {
  return (
    <div className="mt-4">
      <div className="flex items-center pb-10 mx-20 justify-between Footer">
        <div className=" text-center">
          <div className="text-md text-center mb-3 font-bold">
            SHOP ON THE GO
          </div>
          <div className="flex space-x-3 ">
            <a href="https://apps.apple.com/lb/app/ishtari/id1248110122">
              <img src={appStore} alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.smartdevision.app.ishtari">
              <p className="googlePlay">
                <img src={Google} alt=""  />
              </p>
            </a>
          </div>
        </div>
        <div className="flex-row ">
          <div className="text-md text-center mb-3 font-bold ">CONNECT WITH US</div>
          <div className="flex text-center ">
            <a href="https://www.facebook.com/ishtari.lebanon">
                <img src={Facebook} alt=""/>
            </a>
            <a href="https://www.instagram.com/ishtaricom/" className=" text-center mx-8"><i className="bi bi-instagram text-2xl"></i></a>
            <a
              href="https://www.youtube.com/channel/UCZ9aa_BjFF2oWVEtC4f6PDA" className="text-center">
                  <img src={Youtube} alt=""/>
              </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-20 py-6 bg-dblue bg-slate-400/20 w-screen Footer">
        <div className="text-center text-xs text-d13 ">
          <span>©</span>. All Rights Reserved
        </div>
        <div className="flex  justify-center">
          <p className="ae"></p>
          <p className="visa"></p>
          <p className="masterCard"></p>
          <p className="cashCard text-lg w-10 h-10"></p>
        </div>
        <div className="flex space-x-4 text-xs text-blue-700 ">
          <a className="text-xs" href="/information/3">
            Privacy Policy
          </a>
          <a className="text-xs" href="/information/4">
            About Us
          </a>
          <a className="text-xs" href="/information/10">
            Return Policy
          </a>
          <a className="text-xs" href="/information/11">
            FAQ
          </a>
          <a className="text-xs" href="/information/12">
            Terms Of Use
          </a>
          <a className="text-xs" href="/information/13">
            Terms And Conditions
          </a>
          <a className="text-xs" href="/information/14">
            Sell On Ishtari
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foter3;
