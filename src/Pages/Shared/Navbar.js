import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
  //children takay props hisaby niay si karon dasiui ar dower use krlay ay ti korty hobay
  //potom ay sokol route kay jay name ay nav bar link tar componant ar vitory app.js file import kory osabo
  //navbar ay children name destruchrig korbo
  //say children takay dinamically jay jaigai content lika asay sykanay bosabo
    return (
<div class="drawer  drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">

    <div class="w-full navbar lg:px-20 bg-base-200">
   
      <div class="flex-1 px-2 mx-2 text-2xl font-bold ">Clean Co..</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal gap-x-2">
      
          <li><NavLink className='rounded-xl ' to='/'>HOME</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/about'>ABOUT</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/service'>SERVICES</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/contact'>CONTACT</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/login'>LOGIN</NavLink></li>
          <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">to</button>
          <li><NavLink className='rounded-xl btn btn-outline btn-primary ' to='/'>BOOK NOW</NavLink></li>
       
        </ul>
      </div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    </div>
 
    {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      
    <li><NavLink className='rounded-xl ' to='/'>HOME</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/about'>ABOUT</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/service'>SERVICES</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/contact'>CONTACT</NavLink></li>
          <li><NavLink className='rounded-xl ' to='/login'>LOGIN</NavLink></li>
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;