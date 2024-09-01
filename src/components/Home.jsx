import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Импортируйте локальный JSON-файл

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data); // Установите данные из JSON-файла в состояние
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Catalog;