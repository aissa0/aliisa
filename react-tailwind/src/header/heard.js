import React from "react";
// import "./Haeder.css";



function Headr() {

  return (
    <div className="bg-red-700 h-16	 flex items-center">
      <div className=" container	 	">
        <div className="flex justify-between items-center  ">
          <div className="flex  items-center 	">
            <div className="flex  items-center">
            
              <button className="xl:hidden lg:hidden  text-white text-xl mr-4" >
                
                <ion-icon id="mm" name="menu-outline"  ></ion-icon>
              </button>
              <a href="#logo">
                {/* <h1 className=" h-8 mr-4">ishtari</h1> */}
                <img
                  src="https://www.ishtari.com/static/media/logo.966a1527.png"
                  className=" h-8 mr-4"
                  alt="ishtari"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center flex-grow justify-end">
            <div className="relative xl:flex-grow  lg:flex-grow ">
              <input
                type="text"
                className="hidden  lg:block rounded w-full h-8 hover:outline-none px-4 font-light text-sm focus:outline-none false"
                placeholder="What are you looking for? "
                defaultValue=""
              />
              <i className="block xl:hidden lg:hidden icon icon-search text-white text-2xl"></i>
            </div>
            <div className="relative">
              <div className="hidden xl:block lg:block ">
                <div className="text-white border-r border-dmenusep  flex items-center px-3 cursor-pointer hover:opacity-80 relative text-sm">
                  <span>Sign In</span>
                  <i className=" bi bi-person ml-2 text-2xl"></i>
                </div>
                {/* <a href="#button">
                  <span>Sign In</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </a> */}
              </div>
            </div>

              <a
                className=" text-white  flex items-center pl-3 pr-6 cursor-pointer hover:opacity-80 relative"
                href="/cart"
              >
                <span className="hidden xl:block lg:block text-xl">Cart</span>
                <i className=" bi bi-cart3 ml-2 text-xl"></i>
                {/* <span class=" w-6 h-6 bg-dblue flex  items-center justify-center rounded-full text-xs absolute right-1  -top-1 border border-white 	">
                  <span>
                    <span>0</span>
                  </span>
                </span> */}
              </a>
 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headr;
