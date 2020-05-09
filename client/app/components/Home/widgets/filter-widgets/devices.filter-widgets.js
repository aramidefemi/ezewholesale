import React, { useState } from 'react';

var categoryList = [
  'All',
  'Iphone',
  'Samsung',
  'Ipad',
  'MacBooks',
  'AirPods'
];

function DeviceFilterComponent({action }) { 
  // const [count, setCount] = useState(0);

  return (
    <div className='categories'>
      <h3>Categories</h3>
      {
        categoryList.map((item,index)=><p key={index}>{item}</p>)
      }
    </div>
  );
}
export default DeviceFilterComponent;
