import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';
import { FaTelegramPlane } from "react-icons/fa";
import backarrow from '../img/backarrow.png'
import sun from '../img/sun.png'
import moon from '../img/moon.png'

function Product() {
  const { id } = useParams();
  const product = data.find(item => item.id === parseInt(id));

  return (
    <div>
      {product && (
        <div className='text-white pb-10'>
            <Link className='absolute top-2 left-3 bg-[#3E3E3E] px-4 py-2 rounded-[9px] border-2 border-[#FF5A81] flex gap-4' to='/'>
            <img src={backarrow} alt="" />
            <span>НАЗАД</span>
            </Link>
            <img src={product.photo} alt='Girl' className='w-full h-[60vh] object-cover'/>
            <div className='pt-5 px-5'>
              <div className=''>
                <p>{product.name}</p>
                <p>{product.age} ЛЕТ</p>
                <p>{product.city}</p>
              </div>
              <div className='flex justify-between items-center mt-5 w-full'>
                <button className='border-[1px] border-[#FF5A81] w-[77%] bg-[#3E3E3E] rounded-[10px] text-xl h-[54px]'>
                  ЗАКАЗАТЬ
                </button>
                <button className='border-[1px] border-[#FF5A81] h-[54px] rounded-[10px] w-[20%]'>
                  <FaTelegramPlane className='text-[#FF5A81] w-9 h-9 mx-auto' />
                </button>
              </div>
              <div className='mt-5'>
                <h1 className='text-3xl text-bold'>ТАРИФ</h1>
                <h2 className='py-2 pl-2 mt-3'>ДЕНЬ</h2>
              <div className='flex justify-between w-full'>
                <div className='bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%]'>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={sun} alt="" />
                      <h1 className='font-bold text-2xl'>1 час</h1>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        <p>У меня</p>
                        <p>У тебя</p>
                      </div>
                      <div>
                        <p className=''>30.000 ₽</p>
                        <p className=''>40.000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%]'>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={sun} alt="" />
                      <h1 className='font-bold text-2xl'>2 часа</h1>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        <p>У меня</p>
                        <p>У тебя</p>
                      </div>
                      <div>
                        <p className=''>30.000 ₽</p>
                        <p className=''>40.000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='py-2 pl-2'>НОЧЬ</h2>
              <div className='flex justify-between w-full'>
                <div className='bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%]'>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={moon} alt="" />
                      <h1 className='font-bold text-2xl'>1 час</h1>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        <p>У меня</p>
                        <p>У тебя</p>
                      </div>
                      <div>
                        <p className=''>30.000 ₽</p>
                        <p className=''>40.000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%]'>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={moon} alt="" />
                      <h1 className='font-bold text-2xl'>ночь</h1>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        <p>У меня</p>
                        <p>У тебя</p>
                      </div>
                      <div>
                        <p className=''>30.000 ₽</p>
                        <p className=''>40.000 ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className='mt-5 px-5 py-5 bg-[#3E3E3E]'>
                <h2>Детальная информация</h2>
                <div className='mt-5 flex flex-col gap-3'>
                   <p>Возраст:</p>
                   <p>Грудь:</p>
                   <p>Вес:</p>
                   <p>Рост:</p>
                   <p>Размер обуви:</p>
                   <p>Цвет волос:</p>
                   <p>Внешность:</p>
                   <p>Город:</p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Product;