import React from 'react';

const Badge = ({ variant, children }) => {
  return <span className={`badge badge-${variant}`}>{children}</span>;
};

export default Badge;