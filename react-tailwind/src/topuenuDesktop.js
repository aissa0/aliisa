import React, { useContext, useEffect, useReducer, useState } from 'react'
import log from "./assets/images/WhatsApp Image 2022-05-22 at 3.34.10 PM.jpeg"
import _token from './componend/Token';
import { Themepro , Themecontext } from './componend/context';

 function countReducer(state,action){
     if (action === 'INCREMENT')
     return {event: "flex"}
     if (action === 'DECREMENT')
     return  {event: 'hidden'}
     if (action === 'INCREMENT2')
     return {event2: "flex"}
     if (action === 'DECREMENT2')
     return  {event2: 'hidden'}
 }
 function Reducer(setste,action){
    if (action === 'INCREMENT')
    return setste = "flex"
    if (action === 'DECREMENT')
    return setste = "hidden"
}



function Desktop() {

const [state, dispatch] = useReducer(countReducer,  {event : 'hidden', event2: 'hidden'})
const [setste, dispatch1] = useReducer(Reducer,  'hidden')

useEffect(()=>{

},[])
  return (
      <div className='w-screen '>
            <div className='hidden xl:block lg:block w-screen bg-dgrey1 bg-opacity-5' >
                <div className='  container px-6 mx-2 flex items-center  font-semibold font-mono text-lg  '  >
                        <div className='flex container px-6 mx-auto  items-center text-dblack'>
                            <div className=" items-center text-blue-700 text-base  h-12 text-dblue  font-bold flex   w-64 justify-between  cursor-pointer hover:bg-black  hover:bg-opacity-5  px-6" onMouseEnter={()=>dispatch('INCREMENT')} onMouseLeave={()=>dispatch('DECREMENT')} >
                                <span className="items-center  ">ALL CATEGORIES</span>
                                <i className="bi bi-caret-down-fill text-xs"></i>
                            </div>
                            <div className='flex  px-6' >
                                <div className={'cursor-pointer mx-3 font-semibold hover:text-slate-600 '} onMouseEnter={()=>dispatch1('INCREMENT')} onMouseLeave={()=>dispatch1('DECREMENT') }>
                                    <span>HOME & KITCHEN</span>
                                </div>
                                <div className='cursor-pointer mx-3 font-semibold hover:text-slate-600' onMouseEnter={()=>dispatch1('INCREMENT')} onMouseLeave={()=>dispatch1('DECREMENT')} >
                                    <span>ELECTRONICS</span>
                                </div>
                                <div className='cursor-pointer mx-3 font-semibold hover:text-slate-600'onMouseEnter={()=>dispatch1('INCREMENT')} onMouseLeave={()=>dispatch1('DECREMENT')} >
                                    <span>HEALTH & BEAUTY</span>
                                </div >
                                <div className='cursor-pointer mx-3  font-semibold hover:text-slate-600' onMouseEnter={()=>dispatch1('INCREMENT')} onMouseLeave={()=>dispatch1('DECREMENT')}>
                                    <span>FASHION</span>
                                </div>
                                <div className='cursor-pointer mx-3  font-semibold hover:text-slate-600'   >
                                    <span>NEW ARRIVALS</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

                <div>
                    
                    <div id='div' className={` p-6 absolute   bg-white   z-20  w-full  ${setste} `  } onMouseEnter={()=>dispatch1('INCREMENT')} onMouseLeave={()=>dispatch1('DECREMENT')} >
                <div className='flex'>
                <div className='block pl-14 font-medium pr-2'>
                    <h2 className='py-2 text-base '>HOME & KITCHEN</h2>
                    
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Appliances</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Furniture</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Decor</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700 '>Bedding</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Kitchen & Dining</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Housekeeping & Cleaning Tools</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Bath</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>For Winter</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Pet supplies</h4>
                    
                </div>
                <div className=''>
                    <div className='flex' >
                        <img src={log} alt="" className='px-6 w-auto mx-auto  h-30' />
                        <img src={log} alt="" className='px-6 w-auto mx-auto  h-30'/>
                        <img src={log} alt="" className='px-6 w-auto mx-auto  h-30'/>
                    </div>
                </div>
            </div>
            </div>
                </div>


            <div className={ `ml-10 absolute   bg-white   z-20 ${state.event}`} onMouseEnter={()=>dispatch('INCREMENT')} onMouseLeave={()=>dispatch('DECREMENT')}>
                <div className='block p-6'>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Appliances</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Furniture</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Home Decor</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700 '>Bedding</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Kitchen & Dining</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Housekeeping & Cleaning Tools</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Bath</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>For Winter</h4>
                    <h4 className='py-2 text-sm font-normal hover:text-cyan-700'>Pet supplies</h4>
                </div>
                <div className='block w-50 bg-slate-200'>
                <img src={log} alt="" className='px-6 w-auto mx-auto  h-30 '  />
                </div>
            </div>
    </div>
  )
}

export default Desktop





