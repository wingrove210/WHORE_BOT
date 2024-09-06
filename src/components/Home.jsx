import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Импортируйте локальный JSON-файл
import { FaRegHeart } from "react-icons/fa";
import Header from './Header';
function Catalog() {
  const [products, setProducts] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setProducts(data); // Установите данные из JSON-файла в состояние
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCityClick = (cityName) => {
    setCity(cityName);
    const filteredProducts = data.filter(product => product.city === cityName);
    setProducts(filteredProducts);
  };

  const handleAllClick = () => {
    setCity(null);
    setProducts(data);
  };
  return (
    <div>
      <Header/>
      <div className='flex justify-between px-5 py-5 items-center text-white'>
            <div className='w-[10%] h-9 rounded-md bg-[#3E3E3E] border-[1px] border-[#FF5A81] flex items-center justify-center' onClick={handleAllClick}>
              <FaRegHeart className='text-white w-5 h-5'/>
            </div>
            <p 
          className={`h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px] 
            ${city === 'ЮЖНО-САХАЛИНСК' ? 'bg-[#FF5A81] text-white' : ''}`}
          onClick={() => handleCityClick('ЮЖНО-САХАЛИНСК')}
        >
          ЮЖНО-САХАЛИНСК
        </p>
        <p 
          className={`h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px] 
            ${city === 'ВЛАДИВОСТОК' ? 'bg-[#FF5A81] text-white' : ''}`}
          onClick={() => handleCityClick('ВЛАДИВОСТОК')}
        >
          ВЛАДИВОСТОК
        </p>
        <p 
          className={`h-9 w-[28%] border-[#FF5A81] border-[1px] bg-[#3E3E3E] text-[9px] flex justify-center items-center rounded-[10px] 
            ${city === 'ХАБАРОВСК' ? 'bg-[#FF5A81] text-white' : ''}`}
          onClick={() => handleCityClick('ХАБАРОВСК')}
        >
          ХАБАРОВСК
        </p>
        </div>
      <ul className="grid grid-cols-2 gap-2 px-5">
        {products.map(product => (
          <li key={product.id} className="">
            <Link to={`/product/${product.id}`}>
              <div className="relative">
                <div className="relative">
                  <img src={product.photo} alt={product.name} className='h-full w-full border-2 border-[#FF5A81] rounded-[10px]' />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-sm bg-gray-900 bg-opacity-70 w-20 rounded-lg text-center py-1">1 час <span className='text-[#FF5A81] pl-2'>30K</span></h2>
                    <p className="text-sm bg-gray-900 bg-opacity-70 w-20 rounded-lg mt-[2px] text-center py-1">2 часа <span className='text-[#FF5A81] pl-2'>60K</span></p>
                  </div>
                </div>
                <div className='text-white mt-3'>
                  <h2 className="text-[14px]">{product.name}</h2>
                  <h2 className='text-[14px]'>{product.age} ЛЕТ</h2>
                  <p className="text-[14px]">{product.city}</p>
                </div>
                <div className='flex flex-wrap gap-2 text-white mt-2'>
                  <p className='bg-[#3E3E3E] w-[74px] py-1 border-[1px] border-[#FF5A81] text-[12px] text-center rounded-lg'>РОСТ {product.height}</p>
                  <p className='bg-[#3E3E3E] w-[74px] py-1 border-[1px] border-[#FF5A81] text-[12px] text-center rounded-lg'>ВЕС {product.weight}</p>
                  <p className='bg-[#3E3E3E] w-[74px] py-1 border-[1px] border-[#FF5A81] text-[12px] text-center rounded-lg'>ГРУДЬ {product.chest}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Footer/> */}
      <button onClick={handleClick} className='w-[50px] h-[50px] border-2 border-[#FF5A81] rounded-full fixed bottom-5 right-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none" className='mx-auto my-auto'>
          <path d="M31.3419 15.671L28.4665 18.5464L15.671 5.75105L2.87538 18.5464L0 15.671L15.671 -8.01086e-05L31.3419 15.671Z" fill="#FF5A81" />
        </svg>
      </button>
    </div>
  );
}

export default Catalog;