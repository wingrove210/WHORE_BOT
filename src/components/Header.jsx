import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Filters from './Filters';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
    return (
      <>
          <div className='flex items-center justify-between w-full px-5 py-3'>
            <button className='py-3' onClick={handleMenuClick}>
              {menuOpen ? <RxCross1 className='text-white w-7 h-7' /> : <LuMenu className='text-white w-7 h-7' />}
            </button>
            <h2 className='logo-text pr-1'>ANGELES</h2>
          </div>
        {menuOpen && (
          <Filters/>
        )}
      </>
    );
  }
export default Header;