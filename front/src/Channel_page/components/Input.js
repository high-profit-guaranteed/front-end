import React from 'react';

const Input = ({ id, type, placeholder, ...rest }) => {
  return (
    <input id={id} type={type} placeholder={placeholder} className="input" {...rest} />
  );
};

export default Input;
