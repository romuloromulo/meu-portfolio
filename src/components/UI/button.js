import React from "react";

const Button = ({ children, clickHandler, type, style }) => {
  return (
    <button type={type} onClick={clickHandler} className={style}>
      {children}
    </button>
  );
};

export default Button;
