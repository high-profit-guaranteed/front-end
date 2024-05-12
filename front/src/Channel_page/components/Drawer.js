import React from 'react';

const DrawerTrigger = ({ children }) => {
  return <div className="drawer-trigger">{children}</div>;
};

const DrawerTitle = ({ children }) => {
  return <h2 className="drawer-title">{children}</h2>;
};

const DrawerDescription = ({ children }) => {
  return <p className="drawer-description">{children}</p>;
};

const DrawerHeader = ({ children }) => {
  return <div className="drawer-header">{children}</div>;
};

const DrawerClose = ({ asChild, children }) => {
  return asChild ? <div className="drawer-close">{children}</div> : <button className="drawer-close">{children}</button>;
};

const DrawerFooter = ({ children }) => {
  return <div className="drawer-footer">{children}</div>;
};

const DrawerContent = ({ children }) => {
  return <div className="drawer-content">{children}</div>;
};

const Drawer = ({ children }) => {
  return <div className="drawer">{children}</div>;
};

export default Drawer;
export { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent };