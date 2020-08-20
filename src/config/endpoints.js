const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location";
const imageUrl = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/static/img/weather`;
export const weatherByLatLong = ({ lat, long }) =>
  `${apiUrl}/search/?lattlong=${lat},${long}`;

export const weatherByWoeid = (woeid) => `${apiUrl}/${woeid}`;

export const iconSrc = (abbr) => `${imageUrl}/${abbr}.svg`;
