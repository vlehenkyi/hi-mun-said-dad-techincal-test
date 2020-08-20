import React from "react";
import "./style.css";
export default function Slider({ temp, onChange }) {
  const handleChangeTemp = (e) => {
    onChange(+e.target.value);
  };
  return (
    <div className='slider'>
      <input
        type="range"
        min="-50"
        max="50"
        value={temp}
        onChange={handleChangeTemp}
      />
    </div>
  );
}
