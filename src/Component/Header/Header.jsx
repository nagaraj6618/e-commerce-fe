import React from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineSearch } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbScanEye } from "react-icons/tb";
const Header = () => {

   const RouterData = [
      {
         nameData:'home',
         linkTo:'/home',
      },
      {
         nameData:'About',
         linkTo:'/home',
      },
      {
         nameData:'Contact',
         linkTo:'/contact',
      },
      {
         nameData:'Shipping',
         linkTo:'/shipping',
      },
   ]
  return (
    <div>
      <div>
         <ul>
            {
               RouterData.map((data,index) => (
                  <li key={index}>
                     <Link to={data.linkTo}>{data.nameData}</Link>
                  </li>
               ))
            }
            
         
         </ul>
      </div>
      <div>
         <div>
            <span>LoGo</span>
            
         </div>
         <div>
            <input placeholder='search'/>
            <span><TbScanEye /></span>
            <span><MdOutlineSearch/></span>
         </div>
         <div>
            <span><MdLocationPin/></span>
            <span><BsCart4/></span>
            <span><IoIosNotifications/></span>
            {/* <img src='/ig' alt='account-logo'/> */}
            <span><BsThreeDotsVertical/></span>
         </div>
      </div>
    </div>
  )
}

export default Header