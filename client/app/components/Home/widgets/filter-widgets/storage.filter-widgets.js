import React, { useState } from 'react';

var categoryList = [
  '32GB',
  '64GB',
  '128GB',
  '256GB',
];

function StorageFilterComponent({ action }) { 

  return (
    <div className='storage mt-4'>
      <h3>Storage</h3>
      <div className='container'>
        {
          categoryList.map((item, index) => {
            return (
              <div key={index}>
                <input
                  onChange={() => action({
                    size: [item]
                  })}
                  type="radio" name="storage" />
                <h4 key={index}>{item}</h4>
                <br />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default StorageFilterComponent;
