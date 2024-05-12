import React from 'react';

const Select = ({ id, children, ...rest }) => {
  return (
    <select id={id} className="select" {...rest}>
      {children}
    </select>
  );
};

export default Select;
