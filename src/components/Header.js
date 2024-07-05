import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../utils/appSlice";
import Sidebar from './Sidebar';


const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    
    dispatch(toggleMenu());
   
    
  }


  return (
    <div className=' pt-3 min-h-20 pb-3 bg-white mt-6'>
      <div className='flex justify-around items-center pl-3 pr-3 max-h-11'>
        <div className='  w-14 flex'>
        <Sidebar/>
          <img 
          onClick={() => toggleMenuHandler()}
          className="h-8  mt-20 cursor-pointer "
          alt="menu"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrHeAFeJ111OlqNtqltWapH9vzMKENWX58w&usqp=CAU'/>
          
        </div>
        
        <div>
          <img alt='logo' className='h-[90px]' src='https://img2.hocoos.com/u/362136/321162/r7e2ay1hg8k38pm6rglv1y8x_watermark_logo.png'/>
        </div>
        <div>
          <div>
            <button className='bg-emerald-800 text-white pt-2 pl-3 pb-2 pr-3 text-xl  font-medium rounded-3xl mr-8 hover:bg-white  hover:text-emerald-800 hover:border hover:border-emerald-800'>CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header