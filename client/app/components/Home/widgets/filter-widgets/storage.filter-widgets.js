import React, { useState } from 'react';

var categoryList = [
  '32GB',
  '64GB',
  '128GB',
  '256GB',
];

function StorageFilterComponent({action }) { 
  // const [count, setCount] = useState(0);

  return (
    <div className='storage mt-4'>
      <h3>Storage</h3>
      <div className='container'>
      {
        categoryList.map((item,index)=>{
          return (
            <>
            <input  type="radio" />
            <h4 key={index}>{item}</h4>
            <br />
            </>
          )
        })
      }
      </div>
    </div>
  );
}
export default StorageFilterComponent;
