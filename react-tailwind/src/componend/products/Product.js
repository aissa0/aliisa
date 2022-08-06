import React, { useState, useEffect } from "react";
import _token from "../Token";
import Slider from "react-slick";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Pageiteam2 from "../page/Pageiteam2";
import Statusproduct from "./Statusproduct";
// import Images from "./Imges";
import ReactImageMagnify from "react-image-magnify";
import Sledrproduct from "./Sledrproduct";
import Sled from "./Sled";
import Reviews from "./Reviews";

function Product() {
  const [data, setData] = useState({
    info:[]
});
  const [filtre, serFiltre] = useState([]);
  const [laoding, setloading] = useState(false);
  const location = window.location.href;
  useEffect(() => {
    _token
      .get(
        `https://www.ishtari.com/motor/v1/index.php?route=catalog/product&product_id=27125`
      )
      .then((response) => {
     let Data = []
      Data.push(response.data.product)
      setData({
        info: Data
      })
      
    }
      );
   
  }, [location]);
//  function componentDidMount() {
//     this._asyncRequest = loadMyAsyncData().then(
//       externalData => {
//         this._asyncRequest = null;
//         this.setState({externalData});
//       }
//     );
//   }

  // let pro= data.info.map(mm =>{


// })
let G0 = data.info.map((g1) => {
  
  let G1 = g1.images.map((g2) => {
    return <img src={g2.mobile_image}  alt=""/>;
  });
  return (
    <div className="">
      <div className="">{G1}</div>
    </div>
  );

})

let G12= data.info.map((g1)=>{
 console.log()
 let G13= g1.product_categories.map(g12=>{
   return(<a
    className="cursor-pointer hover:opacity-80 min-w-max mr-4"
    href="/Home-Furniture/c=837"
  >
    <img
      src={g12.image}
      alt="Home Furniture"
      className=" w-36 block mx-auto"
    />
    <p className="text-center mt-4 font-semibold text-base">
      {g12.name}
    </p>
  </a>)
 })
 return(   <div className=" w-full bg-white  ">
 <div className="container pb-2 md:pb-8">
   <div className="font-semibold text-xl text-dblack mb-4 pt-2 md:pt-8">
     <h2 className="font-semibold text-2xl px-3 text-dblack mb-4 pt-2 md:pt-8">
       More to explore
     </h2>
     <div className="overflow-auto flex">
       {G13}

     </div>
   </div>
 </div>
</div>)
})

 


  return (
    <div className="text-dblack  min-h-screen">
      <div className="relative">
        <div className="w-screen bg-white py-2">
          <div className="  container text-sm mr-0 ml-2 pr-0">
            <div className=" py-2  md:py-3 flex items-center">
              <a
                className="hidden md:block text-dblack font-light truncate text-d11 md:text-tiny mx-2 hover:text-dblue"
                href="/"
              >
                Home
              </a>
              <i className="bi bi-caret-right text-d11 md:text-tiny text-dgrey1"></i>
              <a
                className="hidden md:block text-dblack font-light truncate text-d11 md:text-tiny mx-2 hover:text-dblue"
                href="/category/837"
              >
                Home Furniture
              </a>
            </div>
            <div className="flex-row md:flex py-2 ">
              <div className="w-full  md:w-5/12">
                <div>
                  <div className=" flex flex-wrap flex-col-reverse md:flex-row ">
                    <div className="w-full mb-2 md:w-2/12 md:pr-2">
                      <div className="selectors overflow-y-hidden  md:overflow-y-scroll h-2/3 whitespace-pre md:whitespace-normal w-24 hover:">
                      {G0}
                      </div>
                    </div>
                    
                    <div className="w-full p-10 md:w-10/12">
                      <a
                        href="https://www.ishtari.com/image/cache/data/gd/8601-8700/gdx8692/1-800x1091.jpg?11"
                        className="MagicZoom"
                      >
                        <div className="z-30" style={{width:'350px', height:'510px'}}>
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Wristwatch by Ted Baker London",
                              isFluidWidth: true,
                              src:"https://www.ishtari.com/image/cache/data/gd/8601-8700/gdx8692/1-192x264.jpg?11" ,
                              className:"z-50",
                            
                            },
                            largeImage: {
                              src: "https://www.ishtari.com/image/cache/data/gd/8601-8700/gdx8692/1-800x1091.jpg?11",
                              width: 700,
                              height: 1020,
                              className:"z-30",
                            },
                          }}
                        />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="  px-3 inline-block w-full 2xl:w-4/12 xl:w-4/12 lg:w-4/12 md:w-4/12">
                
                <p className="text-dgrey1 text-d15 mb-1 md:mb-3 font-light">
                  gdx8692
                </p>
                <div className="mb-3">
                  <div className="mb-3 flex items-center font-sans	">
                    <span className="w-14 text-dblack font-light text-d11 pr-3 ">
                      Was:
                    </span>
                    <span className="line-through md:text-sm pr-3 text-dgrey1 font-light	">
                      3,039,000 L.L
                    </span>
                  </div>
                  <div className="mb-3 flex items-center">
                    <span className="hidden md:block w-14 text-dblack font-light md:text-d13 pr-3 	 ">
                      Now:
                    </span>
                    <span className="font-bold text-dblack text-md">
                      1,350,000 L.L
                    </span>
                    <span className="hidden">3,039,000 L.L</span>
                  </div>
                  <div className="mb-3 flex items-center">
                    <span className="w-14 text-dblack font-light text-d13 pr-3">
                      Saving:
                    </span>
                    <span className="bg-dgreenop text-dgreen font-semibold px-2 text-xs bg-slate-200 text-green-600">
                      56% OFF
                    </span>
                  </div>
                </div>

                <div className="flex my-4">
                  <input
                    type="number"
                    className="false
                                            border
                                            w-16
                                            h-12
                                            rounded
                                            text-dblack text-center
                                            border-dgrey1
                                            text-xl
                                            "
                                            value="1"
                  />
                  <button className=" text-white flex-grow h-12 relative  z-1 bg-blue-600 hover:bg-dbluedark  w-full flex items-center justify-center rounded-md  mx-1 ">
                    <span>
                      <div>
                        <p className="absolute  transition duration-100 ease-in left-5 md:left-14 top-3 text-white translate-x-full invisible ">
                          <span className="bg-white  px-2 rounded-full text-dblue">
                            1
                          </span>{" "}
                          item Added to the Cart
                        </p>
                        <span className="">Add To Cart </span>
                      </div>
                    </span>{" "}
                  </button>
                </div>

                <div className="my-1 md:my-4">
                  <div className="flex">
                    <h2 className="w-1/2">Color</h2>
                  </div>
                  <div className="flex flex-wrap ">
                    <div className="mr-3">
                      <p className="text-xs text-center">balck</p>
                      <div className="p-1 border  m-2 cursor-pointer hover:shadow w-10 h-12 md:w-12 md:h-12 rounded relative  border-dgrey">
                        <img
                          src="https://www.ishtari.com/image/cache/data/categories/color/Black-50x50.jpg?11"
                          alt="Option"
                          placeholdersrc="https://www.sari3.com/ishtaridemo/product_placeholder.png"
                        />
                      </div>
                    </div>
                    <div className="mr-3">
                      <p className="text-xs text-center">balck</p>
                      <div className="p-1 border  m-2 cursor-pointer hover:shadow w-10 h-12 md:w-12 md:h-12 rounded relative  border-dgrey">
                        <img
                          src="https://www.ishtari.com/image/cache/data/categories/color/Black-50x50.jpg?11"
                          alt="Option"
                          placeholdersrc="https://www.sari3.com/ishtaridemo/product_placeholder.png"
                        />
                      </div>
                    </div>
                    <div className="mr-3 text-right">
                      <p className="text-xs text-center">balck</p>
                      <div className="p-1   m-2 cursor-pointer hover:shadow w-10 h-12 md:w-12 md:h-12 rounded relative  hover:border-1">
                        <img
                          src="https://www.ishtari.com/image/cache/data/categories/color/Black-50x50.jpg?11"
                          alt="Option"
                          placeholdersrc="https://www.sari3.com/ishtaridemo/product_placeholder.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="  mt-4 md:mt-0 flex-row  space-x-1 md:space-x-0 w-full md:w-3/12 px-3 md:border-dinputBorder  md:border-l md:self-start pb-4 md:pb-0 ">
                <div className="hidden md:flex-row w-1/2 md:w-full md:flex md:items-center text-dblack py-6">
                  <img
                    src="data:image/png;base64,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"
                    className="w-16"
                    alt="express"
                  />
                  <div className="ml-2">
                    <h1 className="font-semibold text-sm">Express delivery</h1>
                    <p className="text-dgrey1 font-light text-d13">
                      Always is stock, ready to ship, faster delivery
                    </p>
                  </div>
                </div>

                <div className=" hidden md:flex   w-full items-center text-dblack border-t border-dinputBorder py-2 md:py-6 ">
                  <i className="fa fa-bus text-3xl text-red-700"></i>
                  <div className="px-4">
                    <h1 className="font-semibold text-sm">TRUSTED SHIPPING</h1>
                    <p className="text-dgrey1 font-light text-d13">
                      We will make sure to deliver your order within 5 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {G12}
        
        <Statusproduct />
        
        <div className="flex  border-b border-dinputBorder space-x-10 px-6">
        <h2 className="border-b-4 border-dblue scale-110 transform ease-in-out duration-300  font-semibold cursor-pointer text-xl mx-2  py-4">
          Product Reviews
        </h2>
      </div>
      <Reviews/>
      </div>
    </div>
  );
}

export default Product;
