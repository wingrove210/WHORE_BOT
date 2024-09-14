import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSelectedProduct } from '../redux/productSlice';
import { Loading } from './Loading';
import Header from "./Header";
import { clearFilters } from '../redux/filterSlice';
import { setFilters } from '../redux/filterSlice';


function Catalog() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);
  const [selectedCity, setSelectedCity] = useState(filters.city || '');


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loading/>;
  if (error) return <p>Ошибка: {error}</p>;

  // const handleProductClick = (product) => {
  //   dispatch(setSelectedProduct(product)); // Устанавливаем выбранный продукт
  // };
  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product)); // Устанавливаем выбранный продукт
    // window.history.pushState({}, '', `/product/${product.id}`);
  };
  const handleClearFilters = () => {
    dispatch(clearFilters()); // Сбрасываем все фильтры
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const filteredProducts = products.filter(product => {
    return (
      (!filters.city || product.city.toLowerCase() === filters.city.toLowerCase()) &&
      (!filters.fromPrice || product.price1Hour >= filters.fromPrice) &&
      (!filters.toPrice || product.price1Hour <= filters.toPrice) &&
      (!filters.fromAge || product.age >= filters.fromAge) &&
      (!filters.toAge || product.age <= filters.toAge) &&
      (!filters.fromChest || product.chest >= filters.fromChest) &&
      (!filters.toChest || product.chest <= filters.toChest) &&
      (!filters.fromHeight || product.height >= filters.fromHeight) &&
      (!filters.toHeight || product.height <= filters.toHeight) &&
      (!filters.fromWeight || product.weight >= filters.fromWeight) &&
      (!filters.toWeight || product.weight <= filters.toWeight)
    );
  });
  const handleCityClick = (city) => {
    setSelectedCity(city);
    dispatch(setFilters({ city })); // Применяем фильтр по городу
  };
  function formatPrice(price) {
    return (price / 1000).toFixed(0) + 'K';
  }
  return (
<div className='font-hero'>
  <Header/>
  <div className='flex justify-between px-5 py-5 items-center text-white'>
    <div className='w-[10%] h-9 rounded-md bg-[#3E3E3E] border-[1px] border-[#FF5A81] flex items-center justify-center' onClick={handleClearFilters}>
      <FaRegHeart className='text-white w-5 h-5'/>
    </div>
    <p 
      className={`h-9 w-[28%] border-[#FF5A81] border-[1px] text-[9px] flex justify-center items-center rounded-[10px] 
        ${selectedCity === 'ЮЖНО-САХАЛИНСК' ? 'bg-[#FF5A81]' : 'bg-[#3E3E3E]'} text-[9px] flex justify-center items-center rounded-[10px] cursor-pointer`}
      onClick={() => handleCityClick('Южно-Сахалинск')}
    >
      ЮЖНО-САХАЛИНСК
    </p>
    <p 
      className={`h-9 w-[28%] border-[#FF5A81] border-[1px] text-[9px] flex justify-center items-center rounded-[10px] 
        ${selectedCity === 'ВЛАДИВОСТОК' ? 'bg-[#FF5A81]' : 'bg-[#3E3E3E]'} text-[9px] flex justify-center items-center rounded-[10px] cursor-pointer`}
      onClick={() => handleCityClick('Владивосток')}
    >
      ВЛАДИВОСТОК
    </p>
    <p 
      className={`h-9 w-[28%] border-[#FF5A81] border-[1px] text-[9px] flex justify-center items-center rounded-[10px] 
        ${selectedCity === 'ХАБАРОВСК' ? 'bg-[#FF5A81]' : 'bg-[#3E3E3E]'} text-[9px] flex justify-center items-center rounded-[10px] cursor-pointer`}
      onClick={() => handleCityClick('Хабаровск')}
    >
      ХАБАРОВСК
    </p>
  </div>
      <ul className="grid grid-cols-2 gap-2 px-5">
        {filteredProducts.map(product => (
          <li key={product.id} className="">
            {/* <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}> */}
            <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
              <div className="relative">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={product.photo[0]}
                      alt={product.name}
                      className="h-[300px] min-w-full object-cover border-2 border-[#FF5A81] rounded-[10px]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-[10px] bg-gray-900 bg-opacity-70 w-20 rounded-lg text-center py-1">1 час<span className='text-[#FF5A81] pl-2'>{formatPrice(product.price1Hour)}</span></h2>
                    <p className="text-[10px] bg-gray-900 bg-opacity-70 w-20 rounded-lg mt-[2px] text-center py-1">2 часа<span className='text-[#FF5A81] pl-2'>{formatPrice(product.price2Hours)}</span></p>
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
      <button onClick={handleClick} className='w-[50px] h-[50px] border-2 border-[#FF5A81] rounded-full fixed bottom-5 right-5 button-arrow-top'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none" className='mx-auto my-auto'>
          <path d="M31.3419 15.671L28.4665 18.5464L15.671 5.75105L2.87538 18.5464L0 15.671L15.671 -8.01086e-05L31.3419 15.671Z" fill="#FF5A81" />
        </svg>
      </button>
    </div>
  );
}
export default Catalog;