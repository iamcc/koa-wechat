/* 
* @Author: CC
* @Date:   2015-09-16 19:23:00
* @Last Modified by:   CC
* @Last Modified time: 2015-09-16 19:30:20
*/

'use strict';

var app = require('koa')();
var wechat = require('co-wechat');

app.use(wechat('iamcc').middleware(function *() {
  this.body = this.req.body;
}));

app.listen(process.env.PORT || 3000);