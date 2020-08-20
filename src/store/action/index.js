import {
  SET_USER_LATLONG,
  SET_USER_WOEID,
  SET_CURRENT_WEATHER_ABBR,
  SET_CURRENT_DEGREES,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "../constants";
import { getWeatgerByWoeid, getWeatherByLatLong } from "src/config/helpers";

export const setUserLatLong = (payload) => ({
  type: SET_USER_LATLONG,
  payload,
});

export const setUserWoeid = (woeid) => ({
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

export const getCurrentWeather = ({ coords }) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_REQUEST });

  const weatherWithLatLong = getWeatherByLatLong(coords);
  if (weatherWithLatLong) {
    const firstLocationId = weatherWithLatLong[0].woeid;
    const weatherWithWoeid = getWeatgerByWoeid(firstLocationId);
    const consolidatedWeather = weatherWithWoeid["consolidated_weather"];
    const currentDegress = consolidatedWeather["the_temp"];
    const weatherAbbr = consolidatedWeather["weather_state_abbr"];
    dispatch(setCurrentDegrees(currentDegress));
    dispatch(setCurrentWeatcherAbbr(weatherAbbr));
  }
  try {
    dispatch({ type: GET_WEATHER_SUCCESS });
  } catch (e) {
    dispatch({ type: GET_WEATHER_ERROR });
  }
};
