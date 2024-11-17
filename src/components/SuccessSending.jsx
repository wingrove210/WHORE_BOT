import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/LOGO§.png";
import "./checkbox.css";

function SuccessSending() {

  return (
    <div className="h-[70vh]">
      <div className="px-7 py-2 h-full">
        <div className="flex items-center justify-end w-full px-5 py-5 font-hero">
          <img src={logo} alt="logo" className="w-28" />
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl text-white text-center">ВАША ЗАЯВКА ПРИНЯТА❤️</h1>
            <p className="text-lg text-center text-white px-6 leading-6">С вами свяжется наш менеджер 
            Ожидайте.....</p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="/" // Обработчик для проверки checkbox
            className="w-full border-2 border-[#FF5A81] px-2 py-2 rounded-lg bg-[#3E3E3E] mt-5 text-white text-center"
          >
            НА ГЛАВНУЮ
          </a>
          <div className="flex justify-center gap-2 items-center border-[#FF5A81]">
            <p className="text-white text-sm tracking-wider text-center px-3">
            *мы рассчитывают на вашу честность заполненных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessSending;
