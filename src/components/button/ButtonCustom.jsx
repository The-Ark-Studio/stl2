import React from 'react';

import './ButtonCustomStyle.css';

const ButtonCustom = ({children, type, className}) => {
  return (
    <button
      className={`btn-custom ${className ?? ''}`}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
