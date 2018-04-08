import jsonp from './../common/js/jsonp'
import {mainOption,options} from './commonOption'

export function getSingerData() {
  var url = 'https://szc.y.qq.com/v8/fcg-bin/v8.fcg';
  const data = Object.assign({},mainOption, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: '843350259',
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}
