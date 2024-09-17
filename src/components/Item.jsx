import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";
import backarrow from '../img/backarrow.png';
import sun from '../img/sun.png';
import moon from '../img/moon.png';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useSelector } from 'react-redux';

const Slider = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef(0); // Хранение координаты начала свайпа
  const touchEndX = useRef(0); // Хранение координаты конца свайпа

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % product.photo.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.photo.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <div className="slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="relative w-full">
        <img
          src={product.photo[currentImage]}
          alt="Product"
          className="w-full h-[60vh] object-cover"
          key={currentImage}
        />
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1">
          <MdArrowBackIosNew className="text-[#FF5A81] w-7 h-20" />
        </button>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1">
          <MdArrowForwardIos className="text-[#FF5A81] w-7 h-20" />
        </button>
      </div>
    </div>
  );
};

function Product() {
  const navigate = useNavigate();
  const [selectedTariffs, setSelectedTariffs] = useState({ day: null, night: null });
  const [isTariffSelected, setIsTariffSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const productFromState = useSelector((state) => state.products.selectedProduct);
  const [product, setProduct] = useState(productFromState);

  // Сохранение продукта в localStorage
  useEffect(() => {
    if (product) {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
    }
  }, [product]);

  // Восстановление продукта из localStorage при загрузке страницы
  useEffect(() => {
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
          <Slider product={product} />
          <div className='pt-5 px-5'>
            <div>
              <p className='text-3xl font-hero_regular font-normal uppercase'>{product.name}</p>
              <p className='text-2xl font-hero_thin font-light font-normal'>{product.age} ЛЕТ</p>
              <p className='text-lg uppercase font-hero_thin font-normal'>{product.city}</p>
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
              <h2 className='py-2 pl-2 mt-3 font-hero_thin font-light uppercase text-lg'>ДЕНЬ</h2>
              <div className='flex justify-between w-full'>
                <div className={`bg-[#3E3E3E] rounded-xl pb-4 pt-2 px-4 w-[48%] ${selectedTariffs.day === '1 час' ? 'border-2 border-[#FF5A81]' : ''
                  }`} onClick={() => handleTariffClick('1 час', 'day')}>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={sun} alt="" />
                      <h1 className='font-bold text-2xl'>1 час</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>{product.price1Hour.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`bg-[#3E3E3E] rounded-xl pb-4 pt-2 px-4 w-[48%] ${selectedTariffs.day === '2 часа' ? 'border-2 border-[#FF5A81]' : ''
                  }`}
                  onClick={() => handleTariffClick('2 часа', 'day')}>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={sun} alt="" />
                      <h1 className='font-bold text-2xl'>2 часа</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>{product.price2Hours.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='py-1 pl-2 mt-3 font-hero_thin font-light uppercase text-lg'>НОЧЬ</h2>
              <div className='flex justify-between w-full'>
                <div className={`bg-[#3E3E3E] rounded-xl pb-4 pt-2 px-4 w-[48%] ${selectedTariffs.night === '1 час' ? 'border-2 border-[#FF5A81]' : ''
                  }`}
                  onClick={() => handleTariffClick('1 час', 'night')}>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={moon} alt="" />
                      <h1 className='font-bold text-2xl'>1 час</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>{product.price1HourNight.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`bg-[#3E3E3E] rounded-xl pb-4 pt-2 px-4 w-[48%] ${selectedTariffs.night === 'ночь' ? 'border-2 border-[#FF5A81]' : ''
                  }`}
                  onClick={() => handleTariffClick('ночь', 'night')}>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={moon} alt="" />
                      <h1 className='font-bold text-2xl'>ночь</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase'>{product.priceAllNight.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Детальная информация */}
          <div className='mt-5 px-5 py-5 bg-[#3E3E3E]'>
  <h2 className='text-white text-2xl mb-5'>Детальная информация</h2>
  <div className='mb-5'>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Возраст:</p>
      <p className='text-white'>{product.age} лет</p>
    </div>
  </div>
  <div className='mt-5 flex flex-col gap-3'>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Грудь:</p>
      <p className='text-white'>{product.chest}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Вес:</p>
      <p className='text-white'>{product.weight} кг</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Рост:</p>
      <p className='text-white'>{product.height} см</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Размер обуви:</p>
      <p className='text-white'>{product.shoes}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Цвет волос:</p>
      <p className='text-white'>{product.hair}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Внешность:</p>
      <p className='text-white'>{product.appereance}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300'>Город:</p>
      <p className='text-white'>{product.city}</p>
    </div>
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
