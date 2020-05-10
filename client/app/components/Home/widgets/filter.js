import React, { useState } from 'react';
import DeviceFilterComponent from './filter-widgets/devices.filter-widgets';
import PriceFilterComponent from './filter-widgets/price.filter-widgets';
import StorageFilterComponent from './filter-widgets/storage.filter-widgets';

function FilterComponent({ action }) {
  const [count, setCount] = useState(0);

  return (
    <div className='filter'>
      <DeviceFilterComponent action={(msg) => console.log(msg)} />
      <PriceFilterComponent action={action} />
      <StorageFilterComponent action={action} />
    </div>
  );
}
export default FilterComponent;
