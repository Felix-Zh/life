function request(url, data, config) {
  config = Object.assign({}, { method: 'get', headers: {} }, config);

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: config.method,
      dataType: 'json',
      data: data,
      header: Object.assign({}, { 'Content-Type': 'json' }, config.headers),
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

const methods = 'get post put delete patch trace option head'.split(' ');

methods.forEach(method => {
  request[method] = function (url, data, config) {
    return request(url, data, Object.assign({}, config, { method }));
  }
});

export default request;
