import React from 'react'

function Pageiteam2(props) {
   
  return (
    <div className='pr-2' >
        <a className="cursor-pointer  hover:opacity-80" href="Product" >
            <div className='bg-white border shadow-sm pt-1 pb-2 px-1  false' style={{border: "1px solid rgb(238, 238, 238)",width: "100%",marginRight:"0px"}}>
            <img alt="Barbecue Hand Crank Fan Air Blower&nbsp;.." className='' src={props.image} width="288" height="600" placeholdersrc="https://www.sari3.com/ishtaridemo/product_placeholder.png"/>
            <div className='px-0 '>
                <div>
                    <div>
                        <span className='text-dblack text-d13 md:text-thin mb-1 h-10 font-semibold' ></span>
                        <span className='undefined text-d13   md:text-thin mb-1 h-10 font-light'>{props.name}</span>
                    </div>
                    <div>
                        <p className='text-dblack text-d14 md:text-base  md:w-full font-bold  '>{props.special}</p>
                        <div className='false flex items-center '>
                            <p className='text-dgrey1 text-d12 line-through'>{props.price}</p>
                            <p className='ml-2 text-d11  font-semibold text-lime-600'>{props.saving}% OFF</p>
                        </div>
                    </div>
                </div>
                <img src="data:image/png;base64,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" className="h-6 py-1" alt="Express delivery"/>
            </div>
            </div>
        </a>
    </div>
  )
}

export default Pageiteam2