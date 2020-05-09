import React, { useState } from 'react';
import img from '../../../../public/assets/img/5S.png';


function CardComponent({ data, action }) {
  // const [count, setCount] = useState(0);

  return (
    <div className='card'>
      <div className='condition'>
       <span>C/D</span> 
       </div>
      <div className='img'>
        <img src={img} />
      </div>
      <div className='description'>
        <h4>iPhone 8 Plus</h4>
        <p>UNLOCKED | 265GB</p>
        <p><small>Unit price</small></p>
        <h3>$450</h3>
        <p>1500 Available</p>

      </div>
      <div className='button mt-4 px-4'>
        <button  className='btn btn-primary btn-block'>
          Buy
        </button>
      </div>
    </div>
  );
}
export default CardComponent;
