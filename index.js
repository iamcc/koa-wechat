/* 
* @Author: CC
* @Date:   2015-09-16 19:23:00
* @Last Modified by:   CC
* @Last Modified time: 2015-09-16 19:24:19
*/

'use strict';

var app = require('koa')();
var wechat = require('co-wechat');

app.use(wechat('iamcc').middleware(function *() {
  this.body = 'fuck';
}));

app.listen(process.env.PORT || 3000);