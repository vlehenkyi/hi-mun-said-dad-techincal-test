import {
  SET_CURRENT_DEGREES,
  SET_CURRENT_WEATHER_ABBR,
  SET_USER_LATLONG,
  SET_USER_WOEID,
  GET_WEATHER_ERROR,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  CHANGE_CURRENT_TEMP,
} from "../constants";

const initialState = {
  lattitude: null,
  longitude: null,
  woeid: null, //woeid - Where on Eartch ID
  iconSrc: "", //current weather abbriviation for getting icon,
  isLoading: true,
  error: null,
  currentDegrees: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LATLONG:
      return {
        ...state,
        lattitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    case SET_USER_WOEID:
      return {
        ...state,
        woeid: action.woeid,
      };
    case SET_CURRENT_WEATHER_ABBR:
      return {
        ...state,
        iconSrc: action.abbr,
      };
    case SET_CURRENT_DEGREES:
      return {
        ...state,
        currentDegrees: action.degrees,
      };
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case GET_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case CHANGE_CURRENT_TEMP:
      return {
        ...state,
        currentDegrees: action.temp,
      };
    default:
      return state;
  }
};
