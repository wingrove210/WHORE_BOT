import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, clearFilters } from '../redux/filterSlice';
import logo from '../img/LOGO§.png'
import './menu_button.css'
import { Link } from 'react-router-dom';

const BACKEND_URL = "https://backend.skyrodev.ru"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  
  const [fromPrice, setFromPrice] = useState(''); // Новое состояние для цены
  const [toPrice, setToPrice] = useState(''); 
  const [selectedCity, setSelectedCity] = useState('');
  const [fromAge, setFromAge] = useState('');
  const [toAge, setToAge] = useState('');
  const [fromChest, setFromChest] = useState('');
  const [toChest, setToChest] = useState('');
  const [fromHeight, setFromHeight] = useState('');
  const [toHeight, setToHeight] = useState('');
  const [fromWeight, setFromWeight] = useState('');
  const [toWeight, setToWeight] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '120vh';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);
  // Функция для обработки выбора города
  const handleApplyClick = () => {
    dispatch(setFilters({
      city: selectedCity,
      fromPrice,  // Добавлено поле цены
      toPrice,
      fromAge,
      toAge,
      fromChest,
      toChest,
      fromHeight,
      toHeight,
      fromWeight,
      toWeight,
    }));
    setMenuOpen(false); // Закрыть меню после нажатия на "Применить"
  };

  const handleClearClick = () => {
    dispatch(clearFilters());
    setSelectedCity('');
    setFromPrice(''); // Сбросить цену
    setToPrice('');
    setFromAge('');
    setToAge('');
    setFromChest('');
    setToChest('');
    setFromHeight('');
    setToHeight('');
    setFromWeight('');
    setToWeight('');
  };
    return (
      <>
        <div className="flex items-center justify-between w-full px-5 py-3 font-hero">
              <label className="hamburger">
                <input type="checkbox"  onClick={() => setMenuOpen(!menuOpen)}/>
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
                </label>
                <a href="/form" className={menuOpen ? 'opacity-100 border-2 border-[#FF5A81] px-2 rounded-md py-1 text-white font-hero_thin uppercase text-sm': 'opacity-0'}>Добавить Анкету</a>
          <img src={logo} alt="" className="w-28" />
        </div>
        {(
          <div className={`fixed left-0 z-50 h-full bg-[#242424] p-5 transition-all ease-in-out duration-500 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="">
              <h2 className="text-white text-lg">Город :</h2>
              <select
                className="w-full border-2 border-[#FF5A81] rounded-lg py-1 mt-1"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="Москва">Выберете Город</option>
                <option value="ЮЖНО-САХАЛИНСК">МОСКВА</option>
                <option value="ВЛАДИВОСТОК">САНКТ-ПЕТЕРБУРГ</option>
              </select>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Цена :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input
                    type="text"
                    placeholder="3000P"
                    className="border-none outline-none w-[40%]"
                    value={fromPrice}
                    onChange={(e) => setFromPrice(e.target.value)}
                  />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input
                    type="text"
                    placeholder="3000P"
                    className="border-none outline-none w-[40%]"
                    value={toPrice}
                    onChange={(e) => setToPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Возраст:</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input
                    type="text"
                    placeholder="18"
                    className="border-none outline-none w-[40%]"
                    value={fromAge}
                    onChange={(e) => setFromAge(e.target.value)}
                  />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input
                    type="text"
                    placeholder="50"
                    className="border-none outline-none w-[40%]"
                    value={toAge}
                    onChange={(e) => setToAge(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Размер груди :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input
                    type="text"
                    placeholder="2"
                    className="border-none outline-none w-[40%]"
                    value={fromChest}
                    onChange={(e) => setFromChest(e.target.value)}
                  />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input
                    type="text"
                    placeholder="5"
                    className="border-none outline-none w-[40%]"
                    value={toChest}
                    onChange={(e) => setToChest(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Рост</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input
                    type="text"
                    placeholder="150"
                    className="border-none outline-none w-[40%]"
                    value={fromHeight}
                    onChange={(e) => setFromHeight(e.target.value)}
                  />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input
                    type="text"
                    placeholder="180"
                    className="border-none outline-none w-[40%]"
                    value={toHeight}
                    onChange={(e) => setToHeight(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Вес</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input
                    type="text"
                    placeholder="35"
                    className="border-none outline-none w-[40%]"
                    value={fromWeight}
                    onChange={(e) => setFromWeight(e.target.value)}
                  />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input
                    type="text"
                    placeholder="120"
                    className="border-none outline-none w-[40%]"
                    value={toWeight}
                    onChange={(e) => setToWeight(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white"
                onClick={handleApplyClick}
              >
                Применить
              </button>
              <button
                className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white mt-2"
                onClick={handleClearClick}
              >
                Очистить фильтр
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
export default Header;