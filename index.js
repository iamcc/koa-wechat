/* 
* @Author: CC
* @Date:   2015-09-16 19:23:00
* @Last Modified by:   CC
* @Last Modified time: 2015-09-22 17:39:48
*/

'use strict';

var app = require('koa')();
var wechat = require('co-wechat');

app.use(function *(next) {
  var fn = wechat('iamcc').middleware(function *() {
    this.body = 'fuck'
  })
  yield fn(next)
});

app.listen(process.env.PORT || 3000);