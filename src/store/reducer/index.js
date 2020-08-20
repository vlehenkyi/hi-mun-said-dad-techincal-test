import {
  SET_CURRENT_DEGREES,
  SET_CURRENT_WEATHER_ABBR,
  SET_USER_LATLONG,
  SET_USER_WOEID,
  GET_WEATHER_ERROR,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../constants";

const initialState = {
  lattitude: null,
  longitude: null,
  woeid: null, //woeid - Where on Eartch ID
  currentWeatcherIconAbbr: "", //current weather abbriviation for getting icon,
  isLoading: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LATLONG:
      return {
        ...state,
        lattitude: action.payload.lat,
        longtidure: action.payload.long,
      };
    case SET_USER_WOEID:
      return {
        ...state,
        woeid: action.woeid,
      };
    case SET_CURRENT_WEATHER_ABBR:
      return {
        ...state,
        currentWeatcherIconAbbr: action.abbr,
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
    default:
      return state;
  }
};
