import React, { useContext, useEffect } from "react";
import { useState } from "react";
import themecontext from "./acces";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-bootstrap";
import Pageiteam1 from "./page/Pageiteam1";
import Pageiteam2 from "./page/Pageiteam2";
import PageIteam3 from "./page/PageIteam3";
import Pageiteam4 from "./page/Pageiteam4";
import Pageiteam5 from "./page/Pageiteam5";
import _token from "./Token";
import "swiper/css";
import "./page/slick.css";
import Pageteam from "./page/Pageteam";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function Config(props) {
  const [data, setdata] = useState({
    info: [],
    info2: [],
  });
  const [loading, setDoaling] = useState(false);

  const theme = useContext(themecontext);
  console.log(theme)
  window.localStorage.setItem("token", theme);
  window.sessionStorage.setItem("token", theme)
  console.log(window.sessionStorage.getItem("token"))
  const location = window.location.href;
// console.log(theme)
  useEffect(() => {
    

    const requestview = {
      view: "web_desktop",
      limit: "20",
      page: 1,
    };
    _token
      .post(
        `https://www.ishtari.com/motor/v1/index.php?route=common/widgets`,
        requestview
      )
      .then(function (response) {
        const arry = [];
        for (let key of Object.keys(response.data.data)) {
          arry.push({ ...response.data.data[key] });
          setdata({
            info: arry,
          });
        }

        setDoaling(true);
      })

      .catch((error) => console.log(error));
  }, [location]);

  let slider = [];
  let carousel = [];
  let grid1 = [];
  let grid2 = [];
  let grid3 = [];
  let grid4 = [];

  data.info.map((mm) => {
    if (mm.display === "slider") {
      slider.push(mm.items);
    } else if (mm.display === "carousel") {
      carousel.push(mm.items);
      // mm.forEach(element => {
      //   console.log(element)
      // });
    } else if (mm.display === "grid") {
      if (mm.column_number === "8") {
        grid1.push(mm.items);
      } else if (mm.column_number === "4") {
        grid2.push(mm.items);
      } else if (mm.column_number === "1") {
        grid3.push(mm.items);
      } else if (mm.column_number === "3") {
        grid4.push(mm.items);
        // console.log(mm.items)
      } else {
        // console.log(mm);
      }
    } else {
    }
  });

  let Url = "https://www.ishtari.com/";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  let sled = slider.map((m) => {
    let ff = m.map((mm) => {
      // console.log(`${mm.banner_image_id}`+2)
      return (
        <div>
          <img
            style={{ width: "100%", display: "inline-block" }}
            key={`${mm.banner_image_id}` + 2}
            className="d-block w-100"
            src={`${Url}image/${mm.image}`}
            alt="First slide"
          />
        </div>
      );
    });
    return <Slider {...settings}>{ff}</Slider>;
  });

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "binline-block", background: "non" }}
        onClick={onClick}
        dir="ltr"
      >
        <div className="">
          <i className="bi bi-arrow-right-circle text-gray-500 text-4xl hover:text-5xl"></i>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} hover:text-base `}
        style={{
          display: "inline-block",
          color: "current",
          background: "non",
          fontSize: "20px",
        }}
        onClick={onClick}
      >
        <div className="">
          <i className="bi bi-arrow-left-circle text-gray-500 text-4xl hover:text-5xl"></i>
        </div>
      </div>
    );
  }
  var settings2 = {
    className: "center mx-auto",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const settings2 = {
  //   className: "center mx-auto",
  //   infinite: true,
  //   slidesToShow: 7,
  //   slidesToScroll: 3,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  let H0 = carousel.map((h0) => {
    let H1 = h0.map((h1) => {
      // console.log(h1)
      return (
        <Pageiteam2
          name={h1.name}
          price={h1.price}
          special={h1.special}
          image={h1.thumb}
          saving={h1.saving}
        />
      );
    });
    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mt-5 mb-3">
          <a href="/Electronics-On-SALE/c=135">
            <h1 className="font-bold text-xs border px-2 py-1 cursor-pointer hover:opacity-80">
              VIEW ALL
            </h1>
          </a>
        </div>
        <div>
          <Slider {...settings2}>{H1}</Slider>
        </div>
      </div>
    );
  });

  let G0 = grid1.map((g1) => {
    let G1 = g1.map((g2) => {
      return <Pageiteam1 img={`${Url}image/${g2.image}`} />;
    });
    return (
      <div className="mb-4">
        <div className="flex -mx-4 flex-wrap justify-between">{G1}</div>
      </div>
    );
  });

  let G10 = grid2.map((g1) => {
    let G9 = g1.map((g2) => {
      return <Pageiteam4 img={`${Url}image/${g2.image}`} />;
    });
    return (
      <div className="mb-4">
        <div className="flex -mx-4 flex-wrap justify-between">{G9}</div>
      </div>
    );
  });

  let G20 = grid3.map((g1) => {
    let G19 = g1.map((g2) => {
      return <Pageteam img={`${Url}image/${g2.image}`} />;
    });
    return (
      <div className="mb-4">
        <div className="flex -mx-4 flex-wrap justify-between">{G19}</div>
      </div>
    );
  });

  let G30 = grid4.map((g1) => {
    let G29 = g1.map((g2) => {
      return <Pageiteam5 img={`${Url}image/${g2.image}`} />;
    });
    return (
      <div className="mb-4">
        <div className="flex -mx-4 flex-wrap justify-between">{G29}</div>
      </div>
    );
  });

  // const Map19 = data19.info.map((mm) => {
  //   console.log(mm.image , "ima")
  //   return (
  //     <Pageiteam5 key={mm.banner_image_id} img={`${Url}image/${mm.image}`} />
  //   );
  // });

  return (
    // {data.map(x => {
    //   if (x.display == 'slider') {
    //     return (
    //       <div className="mb-4">
    //     <div className=" relative w-full mx-auto">
    //       {sled}
    //     </div>
    //   </div>
    //     )
    //   }
    // })}

    <div className="w-full	p-3	my-3 ">
      {loading ? (
        <div className="mb-4">
          <div className=" relative w-full mx-auto">{sled}</div>

          {G0}
          {G10}
          {H0}
          {G20}
          {G30}
        </div>
      ) : (
        <div className="text-center block">
          <div className="">
          {" "}
          <Spinner animation="grow" variant="danger" />{" "}
          <Spinner animation="grow" variant="danger" />{" "}
          <Spinner animation="grow" variant="danger" />{" "}
          <Spinner animation="grow" variant="danger" />{" "}
          <Spinner animation="grow" variant="danger" />
          </div>
          <div className="h-[1000px]"></div>
        </div>
      )}
    </div>
  );
}

export default Config;
