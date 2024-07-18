import React, { useState, useEffect } from 'react';
import './CustomInput.css'; // Import the CSS file for styling

const CustomInput = ({label,inputValue,setInputValue}) => {
  const [isFocused, setFocus] = useState(false);

  useEffect(() => {
    const inputBoxes = document.querySelectorAll('.input-box');

    inputBoxes.forEach((box) => {
      const input = box.querySelector('input');
      if (input && input.value) {
        box.classList.add('focus');
      } else {
        box.classList.remove('focus');
      }
    });
  }, [inputValue]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`input-box ${isFocused ? 'focus' : ''}`}>
      <label className="input-label">{label}</label>
      <input
        type="text"
        className="input-1"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default CustomInput;
