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
        <p><small>unit price</small></p>
        <h3>$450</h3>
        <p>1500 available</p>

      </div>
      <div className='button'>
        <button  className='btn btn-primary'>
          Buy
        </button>
      </div>
    </div>
  );
}
export default CardComponent;
