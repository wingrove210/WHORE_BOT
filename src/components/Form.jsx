import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/LOGO§.png";
import axios from "axios";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    bustSize: "",
    clothingSize: "",
    shoeSize: "",
    telegram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isNumeric = (value) => /^\d+$/.test(value); // Проверка на числа

  const sendToTelegram = async (data) => {
    const token = "7933769477:AAF3_dmy6dQPq0jkGrZR9jArhLndVw8tVos"; // Замените на ваш токен бота
    const chatId = "1372814991"; // Замените на ваш ID чата

    const message = `
      Новая анкета:
      Рост: ${data.height} см
      Вес: ${data.weight} кг
      Возраст: ${data.age} лет
      Размер груди: ${data.bustSize}
      Размер одежды: ${data.clothingSize}
      Размер обуви: ${data.shoeSize}
      Telegram: ${data.telegram}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    try {
      await axios.get(url);
      alert("Данные успешно отправлены в Telegram!");
      navigate("/check"); // Перенаправляем на главную страницу
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      alert("Не удалось отправить данные в Telegram.");
    }
  };

  const handleSubmit = () => {
    const { height, weight, age, bustSize, clothingSize, shoeSize, telegram } = formData;

    // Проверяем заполненность полей (кроме Telegram) и являются ли они числами
    if (
      isNumeric(height) &&
      isNumeric(weight) &&
      isNumeric(age) &&
      isNumeric(bustSize) &&
      isNumeric(clothingSize) &&
      isNumeric(shoeSize) &&
      telegram.trim() !== ""
    ) {
      // Отправляем данные в Telegram
      sendToTelegram(formData);
    } else {
      alert("Пожалуйста, заполните все поля корректно. Все поля (кроме Telegram) должны содержать только числа.");
    }
  };

  return (
    <div className="h-[120vh] visible">
      <div className="flex items-center justify-end w-full px-5 py-5 font-hero">
        <img src={logo} alt="logo" className="w-28" />
      </div>
      <div className="px-5 text-white text-lg flex flex-col gap-2">
        <div className="flex gap-2 flex-col">
          <h1>Рост:</h1>
          <input
            type="text"
            name="height"
            placeholder="165 см"
            value={formData.height}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Вес:</h1>
          <input
            type="text"
            name="weight"
            placeholder="55 кг"
            value={formData.weight}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Возраст:</h1>
          <input
            type="text"
            name="age"
            placeholder="18 лет"
            value={formData.age}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Размер груди:</h1>
          <input
            type="text"
            name="bustSize"
            placeholder="3"
            value={formData.bustSize}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Размер одежды:</h1>
          <input
            type="text"
            name="clothingSize"
            placeholder="45"
            value={formData.clothingSize}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Размер обуви:</h1>
          <input
            type="text"
            name="shoeSize"
            placeholder="37"
            value={formData.shoeSize}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <h1>Ваш Telegram:</h1>
          <input
            type="text"
            name="telegram"
            placeholder="@kira"
            value={formData.telegram}
            onChange={handleChange}
            className="w-full bg-white border-2 border-[#FF5A81] px-2 py-1 rounded-lg text-black"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full border-2 border-[#FF5A81] px-2 py-1 rounded-lg bg-[#3E3E3E] mt-5"
        >
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
}

export default Form;
