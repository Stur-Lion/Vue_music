import jsonP from 'jsonp'


export default function jsonp(url, data, option) {
  url += (url.indexOf() < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    jsonP(url, option, (err, data) =>{
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

function param(data) {
  var url = ''
  for(var k in data){
    var v = data[k] !== undefined?data[k]:'';
    url +=`&${k}=${encodeURIComponent(v)}`;
  }
  return url?url.subSting(1):''
}
