import React, { useState } from 'react';
import DeviceFilterComponent from './filter-widgets/devices.filter-widgets';
import PriceFilterComponent from './filter-widgets/price.filter-widgets';
import StorageFilterComponent from './filter-widgets/storage.filter-widgets';

function FilterComponent() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='filter'>
      <DeviceFilterComponent />
      <PriceFilterComponent />
      <StorageFilterComponent />
    </div>
  );
}
export default FilterComponent;
