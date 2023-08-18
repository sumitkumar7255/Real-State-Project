import React from 'react';

const PropertyList = ({ properties }) => {
  const imagestyle = {
    borderRadius: '5px',
    cursor: 'pointer',
    height: '200px',
    margig: '20px',
  };

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} style={imagestyle}></img>
          <h2>{property.location}</h2>
          <h2>{property.price}</h2>
          <h2>{property.property_type}</h2>

          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
