import React, { useState } from 'react';
import img from '../../../../public/assets/img/iphone_11_pro_max.png';


function CardComponent({ data, action }) {
  // const [count, setCount] = useState(0);

  return (
    <div className='card'>
      <div className='condition'>
        C/D
       </div>
      <div className='img'>
        <img src={img} />
      </div>
      <div className='description'>
        <
      </div>
    </div>
  );
}
export default CardComponent;
