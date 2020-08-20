import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Slider from "../Slider";
import "./style.css";

export default function Weather({
  getCurrentWeather,
  showAlert,
  isLoading,
  currentTemp,
}) {
  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCurrentWeather, showAlert);
    } else {
      alert(
        "Geolocation API does not supported by your browser.\n Please allow us to use your location to proceed"
      );
    }
  }, []);

  const colors = {
    lowest: "#00ffff",
    middle: "#fff700",
    higher: "#ff8c00",
  };
  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(90deg, ${colors.lowest} 0%, ${
          colors.middle
        } ${currentTemp + 50}%, ${colors.higher} 100%)`,
      }}
    >
      {isLoading ? (
        <p>Weather is Loading please wait...</p>
      ) : (
        <div>
          <Icon />
          <Slider />
        </div>
      )}
    </div>
  );
}

Weather.propTypes = {
  getCurrentWeather: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentTemp: PropTypes.number.isRequired,
};
