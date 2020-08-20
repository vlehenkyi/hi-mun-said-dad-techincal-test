const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location";

export const weatherByLatLong = ({ lat, long }) =>
  `${apiUrl}/search/?lattlong=${lat},${long}`;

export const weatherByWoeid = (woeid) => `${apiUrl}/${woeid}`;
