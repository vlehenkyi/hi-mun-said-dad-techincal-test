import { weatherByLatLong, weatherByWoeid, iconSrc } from "../config/endpoints";
import options from "../config/options";

export const getWeatherByLatLong = async ({ latitude, longitude }) => {
  try {
    const result = await fetch(
      weatherByLatLong({ lat: latitude, long: longitude }),
      options
    );
    return result.json();
  } catch (e) {
    throw e;
  }
};

export const getWeatgerByWoeid = async (woeid) => {
  try {
    const result = await fetch(weatherByWoeid(woeid), options);

    return result.json();
  } catch (e) {
    throw e;
  }
};

export const getImage = async (abbr) => {
  try {
    const result = await fetch(iconSrc(abbr), options);
    const blob = await result.blob();
    const src = URL.createObjectURL(blob);

    return src;
  } catch (e) {
    throw e;
  }
};
