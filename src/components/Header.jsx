import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import axios from "axios"
// import Filters from './Filters';
import { useEffect } from 'react';

const BACKEND_URL = "https://backend.skyrodev.ru"
function Header({onFilterChange}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  
    // Обработчики изменений для фильтров
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleApplyClick = () => {
    setMenuOpen(false); // Закрыть меню после нажатия на "Применить"
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '120vh';
    } else {
      document.body.style.overflow = 'auto';
    }
    // axios.get(`${BACKEND_URL}/models/filter/0`)
  }, [menuOpen]);
  // Функция для обработки выбора города
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    onFilterChange(city); // Передаем выбранный город в родительский компонент
  };
    return (
      <>
        <div className='flex items-center justify-between w-full px-5 py-3 font-hero'>
          <button className='py-3' onClick={handleMenuClick}>
            {menuOpen ? <RxCross1 className='text-white w-7 h-7' /> : <LuMenu className='text-white w-7 h-7' />}
          </button>
          <h2 className='logo-text pr-1'>ANGELES</h2>
        </div>
        {menuOpen && (
          <div className="px-10 py-5 absolute bg-[#242424] main-filters font-hero h-screen">
            <div className="">
              <h2 className="text-white text-lg">Город :</h2>
              <select className="w-full border-2 border-[#FF5A81] rounded-lg py-1 mt-1"  value={selectedCity} onChange={handleCityChange}>
                <option value="Москва">Москва</option>
                <option value="ЮЖНО-САХАЛИНСК">ЮЖНО-САХАЛИНСК</option>
                <option value="ВЛАДИВОСТОК">ВЛАДИВОСТОК</option>
                <option value="ХАБАРОВСК">ХАБАРОВСК</option>
              </select>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Цена :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Возраст :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="18" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="50" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Размер груди :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="2" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="5" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Рост</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="150" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="180" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Вес</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="35" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="120" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white" onClick={handleApplyClick}>Применить</button>
              <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white mt-2" onClick={()=>{setSelectedCity('');}}>Очистить фильтр</button>
            </div>
          </div>
        )}
      </>
    );
  }
export default Header;