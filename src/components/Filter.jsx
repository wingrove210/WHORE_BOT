import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Filters() {
    const [filters, setFilters] = useState([]);
    // const handleSerach = async () => {
    //     axios.get("https://backend.skyrodev.ru/models/filter", {
    //         params: {
    //             city: null,
    //             from_age: null,
    //             to_age: null,
    //             from_chest: null,
    //             to_chest: null,
    //             from_height: null,
    //             to_height: null,
    //             from_weight: null,
    //             to_weight: null
    //         }
    //     })
    // }
    
        
    
    return (
        <div className="px-10 py-5 absolute bg-[#242424] main-filters font-hero h-screen">
            <div className="">
              <h2 className="text-white text-lg">Город :</h2>
              <select className="w-full border-2 border-[#FF5A81] rounded-lg py-1 mt-1">
                <option value="Москва">Москва</option>
                <option value="ЮЖНО-САХАЛИНСК">ЮЖНО-САХАЛИНСК</option>
                <option value="ВЛАДИВОСТОК">ВЛАДИВОСТОК</option>
                <option value="ХАБАРОВСК">ХАБАРОВСК</option>
              </select>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Цена :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Возраст :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="18" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="50" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Размер груди :</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="2" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="5" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Рост</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="150" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="180" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg">Вес</h2>
              <div className="w-full flex justify-between">
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>От</span>
                  <input type="text" placeholder="35" className="border-none outline-none w-[40%]" />
                </div>
                <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
                  <span>До</span>
                  <input type="text" placeholder="120" className="border-none outline-none w-[40%]" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white">Применить</button>
              <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white mt-2" >Очистить фильтр</button>
            </div>
          </div>
    )
}

export default Filters;