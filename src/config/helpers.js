import { weatherByLatLong, weatherByWoeid } from "src/config/endpoints";
import options from "src/config/options";

export const getWeatherByLatLong = async ({ latitude, longtidue }) => {
  try {
    const result = await fetch(
      weatherByLatLong({ lat: latitude, long: longtidue }),
      options
    );
    return result.json();
  } catch (e) {
    throw e;
  }
};

export const getWeatgerByWoeid = async (woeid) => {
  try {
    const result = await weatherByWoeid(woeid);

    return result.json();
  } catch (e) {
    throw e;
  }
};
