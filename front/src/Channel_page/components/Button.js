import React from 'react';

const Button = ({ variant, size, children, ...rest }) => {
  return (
    <button className={`button button-${variant} button-${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
