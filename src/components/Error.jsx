import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/LOGO§.png'

function Error({ statusCode }) {
  return (
    <div className="px-3 text-white font-hero">
      <div className="absolute top-4 right-7">
        <img src={logo} alt="" className='w-28'/>
      </div>
      <div className="text-center mx-auto my-auto flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-center text-4xl">ОШИБКА {statusCode}</h1>
        <p className="text-center font-hero_thin px-5">УПС ! Думаю, что-то пошло не так.
        пожалуйста, вернитесь на главную страницу.</p>
      </div>
      <div className="w-full flex justify-center px-5">
        <Link to="/" className="border-2 border-[#FF5A81] rounded-lg w-full text-center text-white py-1 bg-[#3E3E3E]">НА ГЛАВНУЮ</Link>
      </div>
    </div>
  );
}

export default Error;