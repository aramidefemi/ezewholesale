import React, { useState } from 'react';

var categoryList = [
  'All',
  'Iphone',
  'Samsung',
  'Ipad',
  'MacBooks',
  'AirPods'
];

function DeviceFilterComponent({ action }) {

  return (
    <div className='categories'>
      <h3>Categories</h3>
      {
        categoryList.map((item, index) => <p onClick={() =>
          action({
            name: [item.toUpperCase]
          })
        } key={index}>{item}</p>)
      }
    </div>
  );
}
export default DeviceFilterComponent;
