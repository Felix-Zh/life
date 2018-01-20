import request from '../../utils/request.js';
import { GET_FORTUNE } from './constants.js';
import { JUHE_APP_KEY } from '../../constants/index.js';

export function getFortune(horoscope, type = 'today') {
  return request.get(GET_FORTUNE, { consName: horoscope, type, key: JUHE_APP_KEY });
}
