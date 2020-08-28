import {
  SET_USER_LATLONG,
  SET_USER_WOEID,
  SET_CURRENT_WEATHER_ABBR,
  SET_CURRENT_DEGREES,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
  CHANGE_CURRENT_TEMP,
} from "../constants";
import {
  getWeatgerByWoeid,
  getWeatherByLatLong,
  getImage,
} from "../../config/helpers";

export const setLatLong = (payload) => ({
  type: SET_USER_LATLONG,
  payload,
});

export const setWoeid = (woeid) => ({
  type: SET_USER_WOEID,
  woeid,
});

export const setCurrentWeatcherAbbr = (abbr) => ({
  type: SET_CURRENT_WEATHER_ABBR,
  abbr,
});

export const setCurrentDegrees = (degrees) => ({
  type: SET_CURRENT_DEGREES,
  degrees,
});

export const changeCurrentTemp = (temp) => ({
  type: CHANGE_CURRENT_TEMP,
  temp,
});

export const getCurrentWeather = ({ coords }) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_REQUEST });

  try {
    const weatherWithLatLong = await getWeatherByLatLong(coords);
    if (weatherWithLatLong) {
      const firstLocationId = weatherWithLatLong[0].woeid;
      const weatherWithWoeid = await getWeatgerByWoeid(firstLocationId);
      const consolidatedWeather = weatherWithWoeid["consolidated_weather"][0];
      const currentDegress = Math.floor(consolidatedWeather["the_temp"]);
      const weatherAbbr = consolidatedWeather["weather_state_abbr"];
      const image = await getImage(weatherAbbr);
      dispatch(setCurrentDegrees(currentDegress));
      dispatch(setCurrentWeatcherAbbr(image));
      dispatch(setWoeid(firstLocationId));
      dispatch(setLatLong(coords));
    }
    dispatch({ type: GET_WEATHER_SUCCESS });
  } catch (e) {
    dispatch({ type: GET_WEATHER_ERROR });
  }
};
