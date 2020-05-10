import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';



function valuetext(value) {
  return `${value}°C`;
}

function PriceFilterComponent({ action }) {
  const [value, setValue] = React.useState([28, 74]);

  const handleChange = (event, newValue) => {
    var data = {
      price: {
        min: newValue[0],
        max: newValue[1]
      }
    }
    action(data);
  };
  return (
    <div className='pricefilter mt-4'>
      <h3>Price Filter</h3>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-6 '>
            <p>${value[0] * 10}</p>
          </div>
          <div className='col-md-6 '>
            <p className='text-left' >${value[1] * 10}</p>
          </div>
        </div>
        <Slider
          value={value}
          onChange={(e, value) => {
            setValue(value);
            handleChange(e, [value[0] * 10, value[1] * 10])
          }}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
        <div className='row mt-4'>
          <div className='col-md-12'>
            <input className='form-control' onKeyUp={(e) => {
              handleChange(e, [, e.target.value])
            }} placeholder='Max' />
          </div>
          <div className='col-md-12'>
            <p className='line'>|</p>
          </div>
          <div className='col-md-12'>
            <input className='form-control'
              onKeyUp={(e) => {
                handleChange(e, [e.target.value,])
              }} placeholder='Min' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PriceFilterComponent;
