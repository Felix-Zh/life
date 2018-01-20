import request from '../../utils/request.js';
import { GET_WEATHER } from './constants.js';
import { HE_WEATHER_APP_KEY } from '../../constants/index.js';


export function getWeather(location) {
  return request.get(GET_WEATHER, {
    location,
    key: HE_WEATHER_APP_KEY
  })
  .then(res => res.HeWeather6[0]);
}
