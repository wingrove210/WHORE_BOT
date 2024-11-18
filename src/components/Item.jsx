import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";
import backarrow from '../img/backarrow.png';
import sun from '../img/sun.png';
import moon from '../img/moon.png';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useSelector } from 'react-redux';


const Slider = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % product.photo.length);
      setIsFading(false);
    }, 300); // Длительность анимации
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage((prev) =>
        prev === 0 ? product.photo.length - 1 : prev - 1
      );
      setIsFading(false);
    }, 300); // Длительность анимации
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
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full">
        <img
          src={product.photo[currentImage]}
          alt="Product"
          className={`w-full h-[60vh] object-cover transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
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
  const [selectedTariffs, setSelectedTariffs] = useState({ day: null, night: null });
  const [isTariffSelected, setIsTariffSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const productFromState = useSelector((state) => state.products.selectedProduct);
  const [product, setProduct] = useState(productFromState);
  const encodedModelData = encodeURIComponent(JSON.stringify(product));
  const url = `https://backend.angels-agency.ru/payment/payment?amount=${product.priceAllNight}&currency=RUB&userId=Vlados6385&chatId=1372814991&adminChatId=1372814991&modelData=${encodedModelData}`;

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


  // const handleTariffClick = (tariff, period) => {
  //   // Формируем объект для сохранения тарифа
  //   const selectedTariff = { tariff, period };
  
  //   // Сохраняем новый тариф в localStorage
  //   localStorage.setItem('selectedTariff', JSON.stringify(selectedTariff));
  
  //   // Обновляем состояние
  //   setSelectedTariffs((prevTariffs) => {
  //     if (period === 'day') {
  //       return { day: tariff, night: null };
  //     } else {
  //       return { day: null, night: tariff };
  //     }
  //   });
  
  //   setIsTariffSelected(true);
  //   setErrorMessage('');
  // };
  
  // // Восстановление выбранного тарифа из localStorage при загрузке страницы
  // useEffect(() => {
  //   const savedTariff = localStorage.getItem('selectedTariff');
  //   if (savedTariff) {
  //     const { tariff, period } = JSON.parse(savedTariff);
  //     setSelectedTariffs((prevTariffs) => {
  //       if (period === 'day') {
  //         return { day: tariff, night: null };
  //       } else {
  //         return { day: null, night: tariff };
  //       }
  //     });
  //     setIsTariffSelected(true);
  //   }
  //   console.log(savedTariff)
  // }, []);


//   const handleTariffClick = (tariff, period) => {
//   // Формируем объект для сохранения тарифа
//   const selectedTariff = { tariff, period };

//   // Сохраняем новый тариф в localStorage
//   localStorage.setItem('selectedTariff', JSON.stringify(selectedTariff));

//   // Логика для обновления состояния
//   setSelectedTariffs((prevTariffs) => {
//     if (period === 'day') {
//       return { day: tariff, night: null };
//     } else {
//       return { day: null, night: tariff };
//     }
//   });

//   // Логируем цену выбранного тарифа
//   if (period === 'day') {
//     console.log(`Выбранный тариф (день): ${tariff}`);
//     if (tariff === '1 час') {
//       console.log(`Цена: ${product.price1Hour}`);
//     } else if (tariff === '2 часа') {
//       console.log(`Цена: ${product.price2Hours}`);
//     }
//   } else if (period === 'night') {
//     console.log(`Выбранный тариф (ночь): ${tariff}`);
//     if (tariff === '1 час') {
//       console.log(`Цена: ${product.price1HourNight}`);
//     } else if (tariff === 'ночь') {
//       console.log(`Цена: ${product.priceAllNight}`);
//     }
//   }

//   // Установка флагов
//   setIsTariffSelected(true);
//   setErrorMessage('');
// };

// useEffect(() => {
//   const savedProduct = localStorage.getItem('selectedProduct');
//   if (savedProduct) {
//     setProduct(JSON.parse(savedProduct));
//   } else {
//     // Если данных нет, редирект на главную страницу или другая обработка
//     console.error('Продукт не найден в localStorage!');
//     navigate('/main'); // Или покажите сообщение об ошибке
//   }
// });

  
  const handleOrderClick = () => {
    if (!isTariffSelected) {
      setErrorMessage('Выберите тариф');
    }
  };
  const handlePayment = async () => {
    handleOrderClick()
    window.location.href = url;
  };
  

  return (
    <div className='font-hero'>
      {product && (
        <div className='text-white pb-10'>
          <Link className='absolute top-2 left-3 bg-[#3E3E3E] px-4 py-2 rounded-[9px] border-2 border-[#FF5A81] flex gap-4 z-20' to='/main'>
            <img src={backarrow} alt="" />
            <span className='font-hero_thin'>НАЗАД</span>
          </Link>
          <Slider product={product} />
          <div className='pt-5 px-5'>
            <div>
              <p className='text-3xl font-hero_regular font-light uppercase'>{product.name}</p>
              <p className='text-lg font-hero_regular font-light'>{product.age} ЛЕТ</p>
              <p className='text-xs uppercase font-hero_thin font-normal'>{product.city}</p>
            </div>
            <div className='flex justify-between items-center mt-5 w-full'>
              <button className='border-[1px] border-[#FF5A81] w-[77%] bg-[#3E3E3E] rounded-[10px] text-xl h-[54px] font-hero_regular font-light' onClick={handlePayment}>
                ЗАКАЗАТЬ
              </button>
              {/* <button onClick={() => window.Telegram.WebApp.close()}>Закрыть</button> */}
              <a href='https://web.telegram.org/a/#6304202602' target='_blank' rel='noopener noreferrer' className='border-[1px] border-[#FF5A81] h-[54px] rounded-[10px] w-[20%] py-2'>
                <FaTelegramPlane className='text-[#FF5A81] w-9 h-9 mx-auto' />
              </a>
            </div>
            <div className='mt-5'>
              <h1 className='text-3xl text-bold'>ТАРИФ</h1>
              <h2 className='py-2 pl-2 mt-3 font-hero_thin font-light uppercase text-lg'>ДЕНЬ</h2>
              <div className='flex justify-between w-full'>
                <div className={`bg-[#3E3E3E] rounded-xl pb-4 pt-2 px-4 w-[48%] box-border ${selectedTariffs.day === '1 час' ? 'border-2 border-[#FF5A81]' : ''
                  }`} onClick={() => handleTariffClick('1 час', 'day')}>
                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-between items-center'>
                      <img src={sun} alt="" />
                      <h1 className='font-bold text-base'>1 час</h1>
                    </div>
                    <div className='flex justify-between pt-3 items-center'>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>{product.price1Hour.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
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
                      <h1 className='font-bold text-base'>2 часа</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>{product.price2Hours.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
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
                      <h1 className='font-bold text-base'>1 час</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>{product.price1HourNight.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
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
                      <h1 className='font-bold text-base'>ALL NIGHT</h1>
                    </div>
                    <div className='flex justify-between pt-3'>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>У меня</p>
                      </div>
                      <div>
                        <p className='font-hero_thin font-light uppercase text-xs'>{product.priceAllNight.toLocaleString('ru-RU').replace(/\s+/g, '.')} ₽</p>
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
  <div className=''>
  </div>
  <div className='flex flex-col gap-3'>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Возраст:</p>
      <p className='text-white font-hero_regular'>{product.age} лет</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Грудь:</p>
      <p className='text-white font-hero_regular'>{product.chest}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Вес:</p>
      <p className='text-white font-hero_regular'>{product.weight} кг</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Рост:</p>
      <p className='text-white font-hero_regular'>{product.height} см</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Размер обуви:</p>
      <p className='text-white font-hero_regular'>{product.shoes}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Цвет волос:</p>
      <p className='text-white font-hero_regular'>{product.hair}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Внешность:</p>
      <p className='text-white font-hero_regular'>{product.appereance}</p>
    </div>
    <div className='flex justify-between'>
      <p className='text-gray-300 font-hero_regular'>Город:</p>
      <p className='text-white font-hero_regular'>{product.city}</p>
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
