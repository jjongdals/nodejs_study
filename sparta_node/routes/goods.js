var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    res.send('Router 상품목록 페이지')
});

router.get('/detail', function(res, req, next) {
    res.send('Router 상품목록 상세 페이지')
});

module.exports = router;