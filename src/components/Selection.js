import React, { useState } from 'react';

const Selection = (props) => {
  const [background, setBackground] = useState('');

  const { applyColor, colorId } = props;

  const handleClick = () => {
    applyColor(setBackground);
  };

  const boxStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
    margin: '10px',
    display: 'inline-block',
    backgroundColor: background,
    cursor: 'pointer'
  };

  return (
    <div 
      style={boxStyle}
      onClick={handleClick}
      data-testid={colorId} // Add data-testid attribute
    >
      {/* Content inside the box, if any */}
    </div>
  );
}

export default Selection;
