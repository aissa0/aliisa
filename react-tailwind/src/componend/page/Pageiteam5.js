import React from 'react';
import axios from 'axios';


function Pageiteam5(props ) {
  return (

      <div className=' p-1 cursor-pointer hover:opacity-80 w-1/3 md:w-1/2'>
            <a href="/BUTIGO/m=798" className='flex'>
              
                <img src={props.img}  className='w-full' alt="" />
            </a>
      </div>
  )
}

export default Pageiteam5
