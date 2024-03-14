import React from "react";
import "./InputField.css";

const InputField = ({
  type,
  id,
  names,
  placeholder,
  value,
  onChange,
  className,
  span,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={names}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className={`inputField ${className}`}
      />
      {/* <span className='icon'>{span}</span> */}
    </>
  );
};

export default InputField;
