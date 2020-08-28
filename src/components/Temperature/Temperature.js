import React from "react";
import "./styles.css";

export default ({ currentTemp }) => (
  <div className="temperature">{currentTemp} °C</div>
);
