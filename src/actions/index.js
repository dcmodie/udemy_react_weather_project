import axios from 'axios'

const API_KEY = '955b244283db27f4be2a73fa648dd3b4'
//    //http://api.openweathermap.org/data/2.5/forecast?q=Chicago,us&mode=JSON&appid=955b244283db27f4be2a73fa648dd3b4
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){

  console.log ('in fetchWeather city: ' + city)

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload:request
  }
}
