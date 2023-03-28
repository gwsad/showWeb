const { VITE_GLOB_API_URL } = import.meta.env;
export const ajax = (
  url,
  data = {},
  method = 'get', // 默认为'get'请求
  success,
  fail
) => {
  const commonUrl = VITE_GLOB_API_URL + url;
  const requestURL = method === 'get' ? addURL(commonUrl, data) : commonUrl;
  const sendData = method === 'get' ? null : data;
  const xhr = new XMLHttpRequest();


  xhr.onreadystatechange = () => {
     if(xhr.readyState === 4) {
      try {
          if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
             const response = xhr.responseText;
             return success(JSON.parse(response).data);
         } else {
             const error = xhr.status + xhr.statusText;
             return fail(JSON.parse(error));
         }
      } catch (ex) {
        console.log(ex);
      }
    }
  }
  xhr.open(method, requestURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('token', '123');
  xhr.timeout = 60* 1000;
  xhr.ontimeout = () => {
      console.log('timeout');
  }
  xhr.send(sendData);
}
// 拼接url
const addURL = (url, param) => {
  if(param && Object.keys(param).length) {
      url += (url.indexOf('?') === -1 ? '?' : '&');
      Object.keys(param).map(key => {
          url += encodeURIComponent(key) + '=' + encodeURIComponent(param[key])
      })
  }
  console.log(url);
  return url;
}