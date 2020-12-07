var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form', { title: 'b)' });
});

router.post('/', function(req, res, next) {
    let n1 = parseFloat(req.body.n1);
    let n2 = parseFloat(req.body.n2);
    let o = req.body.operation;
    let resp;
    switch (o) {
        case 'add':
            resp = n1 + n2;
            break;
        case 'sub':
            resp = n1 - n2;
            break;
        case 'mul':
            resp = n1 * n2;
            break;
        case 'div':
            resp = n1 / n2;
            break;
        default:
            resp = "error";
            break;
    }
    response.json({result: resp});
});

module.exports = router;