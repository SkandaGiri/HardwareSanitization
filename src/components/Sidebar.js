import React from 'react'
import { useSelector } from "react-redux";

console.log("hi")
const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    


  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-96'>
        <ul>
            <li>Home</li>
            <li> About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Sidebar