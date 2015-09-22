/* 
* @Author: CC
* @Date:   2015-09-16 19:23:00
* @Last Modified by:   CC
* @Last Modified time: 2015-09-22 18:03:17
*/

'use strict';

var app = require('koa')();
var wechat = require('co-wechat');

app.use(function *(next) {
  return yield wechat('iamcc').middleware(function *() {
    this.body = 'fuck'
  })
});

app.listen(process.env.PORT || 3000);