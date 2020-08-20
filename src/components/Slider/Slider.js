import React from "react";
import PropTypes from "prop-types";
import "./style.css";
export default function Slider({ currentTemp, onChange }) {
  const handleChangeTemp = (e) => {
    onChange(+e.target.value);
  };
  return (
    <div className="slider">
      <input
        type="range"
        min="-50"
        max="50"
        value={currentTemp}
        onChange={handleChangeTemp}
      />
    </div>
  );
}

Slider.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
