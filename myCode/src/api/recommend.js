import jsonp from './../common/js/jsonp'
import {mainOption,options} from './commonOption'

export function getRecommendData() {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({},mainOption, {
    uin: 843350259,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
