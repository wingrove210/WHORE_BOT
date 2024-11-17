import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/LOGO§.png";
import "./checkbox.css";

function Check() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev); // Переключаем состояние
  };

  const handleButtonClick = () => {
    if (isChecked) {
      navigate("/success-sending"); // Перенаправляем на главную страницу
    } else {
      alert("Пожалуйста, согласитесь с условиями, чтобы продолжить.");
    }
  };

  return (
    <div className="h-[70vh]">
      <div className="px-5 py-2 h-full">
        <div className="flex items-center justify-end w-full px-5 py-5 font-hero">
          <img src={logo} alt="logo" className="w-28" />
        </div>
        <div className="flex justify-center items-center h-full text-center text-white">
          <p>
            ЭСКОРТ-ЭТО ДАННОСТЬ,КОТОРАЯ СОПРОВОЖДАЕТ В МИР ВАШИХ ПОТАЕННЫХ
            ЖЕЛАНИЙ
          </p>
        </div>
        <div>
          <div className="flex justify-center gap-2 items-center border-[#FF5A81]">
            <div className="checkbox-wrapper">
              <input
                id="_checkbox-26"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange} // Обработчик для изменения состояния
              />
              <label htmlFor="_checkbox-26">
                <div className="tick_mark"></div>
              </label>
            </div>
            <p className="text-white text-lg tracking-wider">
              Согласия на обработку данных
            </p>
          </div>
          <button
            onClick={handleButtonClick} // Обработчик для проверки checkbox
            className="w-full border-2 border-[#FF5A81] px-2 py-2 rounded-lg bg-[#3E3E3E] mt-5 text-white"
          >
            ДОБАВИТЬ АНКЕТУ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Check;
