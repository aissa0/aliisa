import React from "react";
// import  from 'react';





function Pageteam(props) {
  
     
//     document.querySelector('.items').slick({
//  infinite: true,
//  slidesToShow: 3,
//  slidesToScroll: 3
// });
         
  return (
  <div  className="p-1 cursor-pointer hover:opacity-80 w-1/1 md:w-1/1" >
      <a href="mm">
        <img src={props.img} className="w-full" alt=""/>
      </a>
  </div>
  
  )
}

export default Pageteam