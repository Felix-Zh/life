import request from '../../utils/request.js';
import { LOGIN } from './constants.js';


export function login(code) {

  // todo: update this
  return new Promise(resolve => setTimeout(() => resolve('123456'), 400));

  // return request.get(LOGIN, { code });

}
