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
}) => {
  return (
    <span className=".input-container">
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
      {/* <label for="inputField" placeholder={placeholder} /> */}
    </span>
  );
};

// <div class="input-container">
//         <input type="text" id="inputField" placeholder=" " />
//         <label for="inputField">Placeholder</label>
//       </div>

export default InputField;
