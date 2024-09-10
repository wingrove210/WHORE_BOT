import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';
import { FaTelegramPlane } from "react-icons/fa";
import backarrow from '../img/backarrow.png'
import sun from '../img/sun.png'
import moon from '../img/moon.png'
import { useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


const Slider = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef(0); // Хранение координаты начала свайпа
  const touchEndX = useRef(0); // Хранение координаты конца свайпа

  // Следующее изображение
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % product.photo.length);
  };

  // Предыдущее изображение
  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.photo.length - 1 : prev - 1
    );
  };

  // Обработка начала свайпа
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  // Обработка завершения свайпа
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  // Определение направления свайпа
  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Свайп влево (следующий слайд)
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Свайп вправо (предыдущий слайд)
      handlePrev();
    }
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full">
        <img
          src={product.photo[currentImage]}
          alt="Girl"
          className="w-full h-[60vh] object-cover"
          key={currentImage}
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"
        >
          <MdArrowBackIosNew className="text-[#FF5A81] w-7 h-20" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"
        >
          <MdArrowForwardIos className="text-[#FF5A81] w-7 h-20" />
        </button>
      </div>
    </div>
  );
};


function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTariffs, setSelectedTariffs] = useState({
    day: null,
    night: null,
  });
  const [isTariffSelected, setIsTariffSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const product = data.find(item => item.id === parseInt(id));
  const handleTariffClick = (tariff, period) => {
    setSelectedTariffs((prevTariffs) => {
      if (period === 'day') {
        return { day: tariff, night: null };
      } else {
        return { day: null, night: tariff };
      }
    });
    setIsTariffSelected(true);
    setErrorMessage('');
  };
  const handleOrderClick = () => {
    if (!isTariffSelected) {
      setErrorMessage('Выберите тариф');
    } else {
      navigate('/');
    }
  };
  return (
    <div className='font-hero'>
      {product && (
        <div className='text-white pb-10'>
            <Link className='absolute top-2 left-3 bg-[#3E3E3E] px-4 py-2 rounded-[9px] border-2 border-[#FF5A81] flex gap-4 z-20' to='/'>
            <img src={backarrow} alt="" />
            <span>НАЗАД</span>
            </Link>
            {/* <img src={product.photo} alt='Girl' className='w-full h-[60vh] object-cover'/> */}
            <Slider product={product} />
            <div className='pt-5 px-5'>
              <div className=''>
                <p>{product.name}</p>
                <p>{product.age} ЛЕТ</p>
                <p>{product.city}</p>
              </div>
              <div className='flex justify-between items-center mt-5 w-full'>
                <button className='border-[1px] border-[#FF5A81] w-[77%] bg-[#3E3E3E] rounded-[10px] text-xl h-[54px]' onClick={handleOrderClick}>
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
                <div className={`bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%] ${
            selectedTariffs.day === '1 час' ? 'border-2 border-[#FF5A81]' : ''
          }`} onClick={() => handleTariffClick('1 час', 'day')}>
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
                <div className={`bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%] ${
            selectedTariffs.day === '2 часа' ? 'border-2 border-[#FF5A81]' : ''
          }`}
          onClick={() => handleTariffClick('2 часа', 'day')}>
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
                <div className={`bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%] ${
            selectedTariffs.night === '1 час' ? 'border-2 border-[#FF5A81]' : ''
          }`}
          onClick={() => handleTariffClick('1 час', 'night')}>
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
                <div className={`bg-[#3E3E3E] rounded-xl py-2 px-4 w-[48%] ${
            selectedTariffs.night === 'ночь' ? 'border-2 border-[#FF5A81]' : ''
          }`}
          onClick={() => handleTariffClick('ночь', 'night')}>
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
      {errorMessage && (
        <div className='flex justify-center w-full'>
          <div className="error-message fixed bottom-2 border-2 text-center mx-auto border-[#FF5A81] bg-[#3E3E3E] rounded-lg w-[60%] py-1">
            <p className='text-[#FF5A81]'>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;