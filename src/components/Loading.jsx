// AnimatedSilhouette.js
import React from 'react';
import '../Loading.css';
import loading from '../img/loading.png'


const AnimatedSilhouette = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="Loader">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default AnimatedSilhouette;
