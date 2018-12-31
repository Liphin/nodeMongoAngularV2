/**
 * Created by Administrator on 2018/12/30.
 * node程序主入口
 */

/**
 * 设置目标环境变量的值
 */
global.env = process.env.TARGET_ENV;
//如果未设置目标环境，则默认为dev环境
if (env == undefined || env == '' || env == null) {
    global.env = 'dev';
}

/**
 * 模块及组件引用
 */
const logger = require('./log'); //日志模块
const data = require('./data'); //数据集
const express = require('express'); //express网络框架
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const indexRouter = require('./router/index'); //基础设置路由
const usersRouter = require('./router/users'); //用户登录路由
const exceptionRouter = require('./router/exception'); //异常路由

/**
 * 初始化操作
 */
//数据库pool实例化操作
require('./db/mongodb');
require('./db/mysql');

const app = express();
//http请求设置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//路由使用设置
app.use(indexRouter);
app.use(usersRouter);
app.use(exceptionRouter);


//开启监听端口
app.listen(data.setting['port']);
logger.debug('Server Run Successfully on port: ' + data.setting['port']);








