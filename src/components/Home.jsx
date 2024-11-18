import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSelectedProduct } from '../redux/productSlice';
import { clearFilters, setFilters } from '../redux/filterSlice';
import AnimatedSilhouette from './Loading';
import Header from './Header';
import Error from './Error';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

function Catalog() {
  const dispatch = useDispatch();
  const { products, error } = useSelector(state => state.products);
  const filters = useSelector(state => state.filters);
  const [selectedCity, setSelectedCity] = useState(filters.city || '');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSelectedCity('');
  };

  const handleCityClick = city => {
    setSelectedCity(city);
    dispatch(setFilters({ city }));
  };

  const handleProductClick = product => {
    dispatch(setSelectedProduct(product));
  };

  const filteredProducts = products.filter(product => {
    return (
      // (!filters.city || product.city.toLowerCase() === filters.city.toLowerCase()) &&
      // (!filters.fromPrice || product.price1Hour >= filters.fromPrice) &&
      // (!filters.toPrice || product.price1Hour <= filters.toPrice)
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

  const formatPrice = price => (price / 1000).toFixed(0) + 'K';

  return (
    <div className="font-hero">
      <Header />
      <div className="flex justify-between px-5 py-5 items-center text-white">
        <button
          className="w-[10%] h-9 bg-[#3E3E3E] border border-[#FF5A81] rounded-md flex items-center justify-center"
          onClick={handleClearFilters}
        >
          <RxCross1 className="text-white w-5 h-5" />
        </button>
        <button
          className={`h-9 w-[43%] border border-[#FF5A81] rounded-[10px] text-[9px] ${
            selectedCity === 'Санкт-Петербург' ? 'bg-[#FF5A81]' : 'bg-[#3E3E3E]'
          }`}
          onClick={() => handleCityClick('Санкт-Петербург')}
        >
          Санкт-Петербург
        </button>
        <button
          className={`h-9 w-[43%] border border-[#FF5A81] rounded-[10px] text-[9px] ${
            selectedCity === 'Москва' ? 'bg-[#FF5A81]' : 'bg-[#3E3E3E]'
          }`}
          onClick={() => handleCityClick('Москва')}
        >
          Москва
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-2 px-5">
        {filteredProducts.map(product => (
          // <li key={product.id}>
          //   <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
          //     <div className="relative">
          //       <Swiper modules={[Pagination]} pagination={{ clickable: true }} loop className="h-[300px]">
          //         {product.photo.map((photo, index) => (
          //           <SwiperSlide key={index}>
          //             <img
          //               src={photo}
          //               alt={`${product.name} ${index}`}
          //               className="h-[300px] min-w-full object-cover border-2 border-[#FF5A81] rounded-[10px]"
          //             />
          //           </SwiperSlide>
          //         ))}
          //       </Swiper>
          //       <div className="absolute bottom-0 left-0 p-4 text-white">
          //         <h2 className="text-[10px] bg-gray-900 bg-opacity-70 w-20 rounded-lg text-center py-1">
          //           1 час <span className="text-[#FF5A81] pl-2">{formatPrice(product.price1Hour)}</span>
          //         </h2>
          //       </div>
          //       <div className="text-white mt-3">
          //         <h2 className="text-[14px] uppercase">{product.name}</h2>
          //         <p className="text-[14px]">{product.age} ЛЕТ</p>
          //         <p className="text-[14px] uppercase">{product.city}</p>
          //       </div>
          //     </div>
          //   </Link>
          // </li>
          <li key={product.id} className="">
          <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
            <div className="relative">
              <div className="relative">
<Swiper
modules={[Pagination]} // Убираем Navigation
pagination={{ clickable: true }} // Оставляем только pagination
loop={true} // Включаем бесконечный скроллинг
className="h-[300px]"
>
{product.photo.map((photo, index) => (
  <SwiperSlide key={index}>
    <img
      src={photo}
      alt={`${product.name} ${index}`}
      className="h-[300px] min-w-full object-cover border-2 border-[#FF5A81] rounded-[10px]"
    />
  </SwiperSlide>
))}
</Swiper>

                <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                  <h2 className="text-[10px] bg-gray-900 bg-opacity-70 w-20 rounded-lg text-center py-1">1 час<span className='text-[#FF5A81] pl-2'>{formatPrice(product.price1Hour)}</span></h2>
                  <p className="text-[10px] bg-gray-900 bg-opacity-70 w-20 rounded-lg mt-[2px] text-center py-1">2 часа<span className='text-[#FF5A81] pl-2'>{formatPrice(product.price2Hours)}</span></p>
                </div>
              </div>
              <div className='text-white mt-3'>
                <h2 className="text-[16px] uppercase font-hero_bold">{product.name}</h2>
                <h2 className='text-[14px] font-hero_regular'>{product.age} ЛЕТ</h2>
                <p className="text-[14px] uppercase font-hero_regular">{product.city}</p>
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
      <button className='bg-[#3E3E3E] w-12 h-12 rounded-full fixed z-10 right-3 border-2 border-[#FF5A81] bottom-4'>
          <IoIosArrowUp  className='text-[#FF5A81] w-11 h-11'/>
      </button>
    </div>
  );
}

export default Catalog;
