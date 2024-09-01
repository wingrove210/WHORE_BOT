import React from 'react'
import { LuMenu } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
function Header() {
    return (
      <>
        <div className='py-4 px-5 flex justify-between items-center text-white'>
          <button className='py-3'>
            <LuMenu className='text-white w-7 h-7' />
          </button>
          <h2 className='logo-text'>ANGELES</h2>
        </div>
        <div className='flex justify-between px-5 py-5 items-center text-white'>
            <div className='w-[10%] h-9 rounded-md bg-[#3E3E3E] border-[1px] border-[#FF5A81] flex items-center justify-center'>
              <FaRegHeart className='text-white w-5 h-5'/>
            </div>
            <p className='h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px]'>ЮЖНО-САХАЛИНСК</p>
            <p className='h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px]'>ВЛАДИВОСТОК</p>
            <p className='h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px]'>ХАБАРОВСК</p>
        </div>
      </>
    );
  }
export default Header;