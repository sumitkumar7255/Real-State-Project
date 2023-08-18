import React, { useState } from 'react';
import PropertyList from './PropertyList';
import FilterPanel from './FilterPanel';
import './App.css';
import dummyData from './dummyData.js';

const App = () => {
  const [filteredProperties, setFilteredProperties] = useState(dummyData);

  const applyFilters = (filterData) => {
    const tempArray = filteredProperties.filter(
      (item) =>
        item.location == filterData.location &&
        item.price == parseInt(filterData.price)
    );
    console.log(tempArray);
    setFilteredProperties([...tempArray]); // Replace with filtered data
  };

  return (
    <div className="app">
      <h1>Rent a Property</h1>
      <FilterPanel applyFilters={applyFilters} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default App;
