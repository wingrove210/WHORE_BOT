import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { FaTelegramPlane } from "react-icons/fa";

function Product() {
  const { id } = useParams();
  const product = data.find(item => item.id === parseInt(id));

  return (
    <div>
      {product && (
        <div className='text-white'>
            <img src={product.photo} alt='Girl' className='w-full h-[60vh] object-cover'/>
            <div className='pt-5 pl-5'>
                <p>{product.name}</p>
                <p>{product.age} ЛЕТ</p>
                <p>{product.city}</p>
            </div>
            <div className='flex justify-between items-center px-3 mt-5 w-full'>
                <button className='border-[1px] border-[#FF5A81] w-[77%] bg-[#3E3E3E] rounded-[10px] text-xl h-[54px]'>ЗАКАЗАТЬ</button>
                <button className='border-[1px] border-[#FF5A81] h-[54px] rounded-[10px] w-[20%]'>
                    <FaTelegramPlane className='text-[#FF5A81] w-9 h-9 mx-auto'/>
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Product;