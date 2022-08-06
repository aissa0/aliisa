import React from 'react'
import PropTypes from 'prop-types'

function TopMenuMobile(props) {
  return (
    <div className='transition-all min-h-screen w-screen bg-white fixed top-0  bottom-0 right-0 overflow-x-hidden overflow-y-scroll z-50 hidden  '>
        <div className=' text-dblack '>
            <div className='flex flex-col py-3 border-b border-dgrey px-4 '>
                <div className='flex items-center justify-between'>
                    <img src="/static/media/logo-red.a879f3b6.png" alt="ishtari" className="h-8"/>
                    <button>
                        
                    </button>
                </div>
                <h2 className=' font-semibold pt-2'>Hi, We Are </h2>
            </div>
            <div className='relative'>
                <div className=' relative flex items-center justify-between py-4 px-8 border-b border-dgrey'>
                    <a className='menu-button' href='b'>
                        <i className="bi bi-house-door-fill"></i>
                        <span>Home</span>
                    </a>
                    <button className='menu-button'>
                        <span className='menu-icon'>
                        <i className="bi bi-person-fill"></i>
                        </span>
                        <span>Sign In</span>
                    </button>
                    <button className='menu-button'>
                        <span className='menu-icon'>
                        <i className="bi bi-person-plus-fill"></i>
                        </span>
                        <span>Sign Up</span>
                    </button>
                    <a className='menu-button' href='b'>
                        <i class="bi bi-cart-fill"></i>
                        <span>My Cart</span>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}



export default TopMenuMobile
