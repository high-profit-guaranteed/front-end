import React from 'react';

const CardTitle = ({ children }) => {
  return <h2 className="card-title">{children}</h2>;
};

const CardDescription = ({ children }) => {
  return <p className="card-description">{children}</p>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardFooter = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
export { CardTitle, CardDescription, CardHeader, CardFooter };