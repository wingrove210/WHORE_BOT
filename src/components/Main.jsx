import React from "react";
import Header from "./Header";
import Catalog from "./Home";
import { useState } from "react";
function Main(){
    const [selectedCity, setSelectedCity] = useState('');

    // // Функция для изменения фильтров, которую будем передавать в компонент Filters
    const handleFilterChange = (city) => {
      setSelectedCity(city);
    };
    return(
        <div>
        {/* <Filters onFilterChange={handleFilterChange} /> */}
        <Header onFilterChange={handleFilterChange}/>
        <Catalog selectedCity={selectedCity} />
      </div>
    )
}

export default Main;