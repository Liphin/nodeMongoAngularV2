/**
 * Created by Administrator on 2018/12/30.
 */
const express = require('express');
const app = express();

// catch 404 error
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    res.send(err)
});

module.exports = app;