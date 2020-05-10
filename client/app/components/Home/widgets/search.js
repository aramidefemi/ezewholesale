import React, { useState } from 'react';
import { arrangeSearchTerm } from './filter-widgets/lib';


function splitSearchTerm(term, action) {
  var parts = term.split(',');
  var data = arrangeSearchTerm(parts);
  action(data);
}

function SearchComponent({ action }) {
  const [term, setTerm] = useState('');
  return (
    <div className='form row mt-4'>
      <div className='col-md-10'>
        <input className='form-control' onChange={(e) => {
          setTerm(e.target.value);
        }} placeholder='Enter Search Term (e.g iphoNe XS, A1, 128GB) ' />
      </div>
      <div className='col-md-2 p-0'>
        <button className='btn btn-primary btn-block' onClick={() => splitSearchTerm(term, action)} >SEARCH</button>
      </div>
    </div>
  );
}
export default SearchComponent;
