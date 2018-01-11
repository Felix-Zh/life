import request from '../../utils/request.js';
import { GET_ADDRESS_BY_POSITION } from './constants.js';
import { BAIDU_MAP_API_APP_KEY } from '../../constants/index.js';

/**
 * 根据地理位置（经纬度）获取地址信息
 * @param {Object} position 地理位置 - { latitude, longitude }
 * @param {String} ak 百度地图 APP Key
 */
export function getAddressByPosition({ latitude, longitude }, ak = BAIDU_MAP_API_APP_KEY) {
  const data = {
    location: `${latitude},${longitude}`,
    output: 'json'
  };

  return request.get(GET_ADDRESS_BY_POSITION, { ...data, ak });
}
