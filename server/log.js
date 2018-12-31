/**
 * 打印日志的js方法
 */
const data = require('./data');
const winston = require('winston');
require('winston-daily-rotate-file');

//控制台输出
var transportConsole = new winston.transports.Console({
    level: 'debug',
    handleExceptions: true,
    format: winston.format.simple()
});

//打印前端每天所有日志
var transportCombined = new winston.transports.DailyRotateFile({
    filename: data.setting['base'] + 'log/%DATE%/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    level: 'debug',
    format: winston.format.simple()
});

//打印前端每天error日志
var transportError = new winston.transports.DailyRotateFile({
    filename: data.setting['base'] + 'log/%DATE%/application-%DATE%.error.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    level: 'warn',
    format: winston.format.simple()
});

//日期切换时打印日志
transportCombined.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

//调用打印日志接口，运行打印日志
let logger = winston.createLogger({
    transports: [
        transportConsole,
        transportCombined,
        transportError
    ],
    exitOnError: false, //遇到错误时，是否退出日志打印
});

module.exports = logger;