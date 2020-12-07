var express = require('express');
var router = express.Router();
const url = require('url');

router.get('/', function(req, res, next){
    let q = url.parse(req.url,true).query;
    let n1 = parseFloat(q['n1']);
    let n2 = parseFloat(q['n2']);
    let operation = q['operation']; let response;
    console.log(q['n1'] + " " + q['n2'] + " " + operation + " ===========");
    switch (operation) {
        case 'add':
            response = n1+n2;
            break;
        case 'sub':
            response = n1-n2;
            break;
        default:
            response = "error";
            break;
    }
    res.render('formData', {
        title: 'c)',
        number1: n1,
        number2: n2,
        operation: operation,
        resp: response
    });
});
module.exports = router;