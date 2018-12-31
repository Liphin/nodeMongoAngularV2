/**
 * Created by Administrator on 2018/12/30.
 */
const express = require('express');
const router = express.Router();

/* 用户登录验证等 */
router.get('/login', (req, res, next) => {
    res.send('login verify');
});

module.exports = router;