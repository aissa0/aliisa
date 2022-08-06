import React from 'react'
import './Page.css'

function Pageiteam4(props) {
  return (
    <div className=' p-1 cursor-pointer hover:opacity-80 w-1/4 md:w-1/2 item '>
        <a href="/BUTIGO/m=798">
            <img src={props.img}  className='w-full' alt="" />
        </a>
    </div>
  )
}

export default Pageiteam4