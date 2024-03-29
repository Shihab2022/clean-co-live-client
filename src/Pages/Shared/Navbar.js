

import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UseAdmin from "../../hooks/UseAdmin";

const Navbar = ({ children }) => {
  const [dark,setDark]=useState(false)
  const [admin]=UseAdmin()
  const {pathname}=useLocation()
// console.log(pathname)
  return (
    <div class='drawer  drawer-end' data-theme={dark ? 'dark' : 'light'}>
      <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col'>
        <div class='w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20'>
      { pathname.includes('dashboard') && <label  for="my-drawer-2" tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>}
       
          <div class='flex-1 px-2 mx-2 text-2xl'>Clean Co.</div>
          <div class='flex-none lg:hidden'>
            <label for='my-drawer-3' class='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                class='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>

          <div class='flex-none hidden lg:block'>
            <ul class='menu menu-horizontal gap-x-2'>
              <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
             {admin && <li>
                <NavLink to='/dashboard/addService' className='rounded-lg'>
                  Dashboard
                </NavLink>
              </li>}

              <li>
                <NavLink to='/about' className='rounded-lg'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' className='rounded-lg'>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' className='rounded-lg'>
                  Login
                </NavLink>
              </li>

              <li class='dropdown dropdown-hover dropdown-end'>
                <label
                  tabindex='0'
                  class='btn btn-primary btn-outline rounded-lg'
                >
                  BOOK NOW
                </label>
                <ul
                  tabindex='0'
                  class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>
              <label class='swap swap-rotate'>
                <input type='checkbox' onClick={()=>setDark(!dark)} />

                <svg
                  class='swap-on fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                </svg>

                <svg
                  class='swap-off fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                </svg>
              </label>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-3' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
        <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
              {admin && <li>
                <NavLink to='/dashboard' className='rounded-lg'>
                  Dashboard
                </NavLink>
              </li>}
              <li>
                <NavLink to='/about' className='rounded-lg'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' className='rounded-lg'>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' className='rounded-lg'>
                  Login
                </NavLink>
              </li>
              <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <li>
                <Link to='/contact' className='rounded-lg'>
                  Quick Book
                </Link>
              </li>
              <li>
                <Link to='/login' className='rounded-lg'>
                  Login here
                </Link>
              </li>
              
</div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

















// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = ({children}) => {
//   //children takay props hisaby niay si karon dasiui ar dower use krlay ay ti korty hobay
//   //potom ay sokol route kay jay name ay nav bar link tar componant ar vitory app.js file import kory osabo
//   //navbar ay children name destruchrig korbo
//   //say children takay dinamically jay jaigai content lika asay sykanay bosabo
//     return (
// <div class="drawer  drawer-end">
//   <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
//   <div class="drawer-content flex flex-col">

//     <div class="w-full navbar lg:px-20 bg-base-100">
   
//       <div class="flex-1 px-2 mx-2 text-2xl font-bold ">Clean Co..</div>
//       <div class="flex-none hidden lg:block">
//         <ul class="menu menu-horizontal gap-x-2">
      
//           <li><NavLink className='rounded-xl ' to='/'>HOME</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/about'>ABOUT</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/service'>SERVICES</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/contact'>CONTACT</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/login'>LOGIN</NavLink></li>
//           <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">to</button>
//           <li><NavLink className='btn  btn-outline rounded-lg ' to='/'>BOOK NOW</NavLink></li>
       
//         </ul>
//       </div>
//       <div class="flex-none lg:hidden">
//         <label for="my-drawer-3" class="btn btn-square btn-ghost">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//         </label>
//       </div> 
//     </div>
 
//     {children}
//   </div> 
//   <div class="drawer-side">
//     <label for="my-drawer-3" class="drawer-overlay"></label> 
//     <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      
//     <li><NavLink className='rounded-xl ' to='/'>HOME</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/about'>ABOUT</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/service'>SERVICES</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/contact'>CONTACT</NavLink></li>
//           <li><NavLink className='rounded-xl ' to='/login'>LOGIN</NavLink></li>
      
//     </ul>
    
//   </div>
// </div>
//     );
// };

// export default Navbar;