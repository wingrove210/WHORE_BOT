import React from 'react';
import '../Loading.css';
import loading from '../img/loading.gif'


const AnimatedSilhouette = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="Loader">
        <img src={loading} alt="" className='w-1/2 h-1/2 rounded-full' />
      </div>
    </div>
  );
};

export default AnimatedSilhouette;
