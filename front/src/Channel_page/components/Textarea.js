import React from 'react';

const Textarea = ({ id, placeholder, rows, ...rest }) => {
  return <textarea id={id} placeholder={placeholder} rows={rows} className="textarea" {...rest} />;
};

export default Textarea;
