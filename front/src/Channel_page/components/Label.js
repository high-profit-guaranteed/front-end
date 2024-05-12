import React from 'react';

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
};

export default Label;
