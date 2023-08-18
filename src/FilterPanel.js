import React, { useState } from 'react';

const FilterPanel = ({ applyFilters }) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <div className="filter-panel">
      Render filter input fields and buttons
      {/* Example: */}
      <input
        type="text"
        name="location"
        placeholder="location"
        value={filters.location}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="price"
        placeholder="enter price"
        value={filters.price}
        onChange={handleFilterChange}
      />
      {/* ... */}
      <button onClick={handleApplyFilters}>search</button>
    </div>
  );
};

export default FilterPanel;
