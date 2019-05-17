const baseUrl = 'https://www.google-analytics.com/collect';
const toQueryString = (params) => {
  return Object.keys(params).reduce((result, param) => {
    result.push(`${param}=${encodeURIComponent(params[param])}`);
    return result;
  }, []).join('&');
}

onmessage = (e) => {
  var request = new XMLHttpRequest();
  request.open('POST', baseUrl+'?'+toQueryString({...e.data.args, z: 2}), true);
  request.send();
  request.onload = function () {
    postMessage(e.data);
  };
};
