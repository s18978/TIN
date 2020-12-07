var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
    console.log(req.body);
    let n1 = parseFloat(req.body.n1); let n2 = parseFloat(req.body.n2);
    let operation = req.body.operation; let response;

    switch (operation) {
        case 'add':
            response = n1 + n2;
            break;
        case 'sub':
            response = n1 - n2;
            break;
        default:
            response = "error";
            break;
    }
    res.render('formData', {
        title: 'd)',
        number1: n1,
        number2: n2,
        operation: operation,
        resp: response
    });
});

module.exports = router;