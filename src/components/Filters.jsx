import React from "react"
import data from '../data.json';
import { useEffect } from "react";
import { useState } from "react";
// function Filters(){
//   return (

    // <div className="px-10 py-5">
    //   <div className="">
    //     <h2 className="text-white text-xl">Город :</h2>
    //     <select className="w-full border-2 border-[#FF5A81] rounded-lg py-1 mt-1">
    //       <option value="Москва">Москва</option>
    //       <option value="ЮЖНО-САХАЛИНСК">ЮЖНО-САХАЛИНСК</option>
    //       <option value="ВЛАДИВОСТОК">ВЛАДИВОСТОК</option>
    //       <option value="ХАБАРОВСК">ХАБАРОВСК</option>
    //     </select>
    //   </div>
    //   <div className="mt-2">
    //     <h2 className="text-white text-xl">Цена :</h2>
    //     <div className="w-full flex justify-between">
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>От</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>До</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-2">
    //     <h2 className="text-white text-xl">Возраст :</h2>
    //     <div className="w-full flex justify-between">
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>От</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>До</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-2">
    //     <h2 className="text-white text-xl">Размер груди :</h2>
    //     <div className="w-full flex justify-between">
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>От</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>До</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-2">
    //     <h2 className="text-white text-xl">Рост</h2>
    //     <div className="w-full flex justify-between">
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>От</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>До</span>
    //         <input type="text" placeholder="3000P" className="border-none outline-none w-[40%]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-2">
    //     <h2 className="text-white text-xl">Вес</h2>
    //     <div className="w-full flex justify-between">
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>От</span>
    //         <input type="text" placeholder="35" className="border-none outline-none w-[40%]" />
    //       </div>
    //       <div className="bg-white border-[#FF5A81] rounded-lg w-[48%] flex justify-between border-2 px-2 py-1">
    //         <span>До</span>
    //         <input type="text" placeholder="120" className="border-none outline-none w-[40%]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-10">
    //     <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white">Применить</button>
    //     <button className="w-full text-center border-2 border-[#FF5A81] py-1 rounded-lg text-white mt-2">Очистить фильтр</button>
    //   </div>
    // </div>
//     )
// };
// export default Filters;