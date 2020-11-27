// Write HTTP server that will accept requests for different math operations
// (add,sub,mul,div) under different URLs, extract parameter values from the request parameters
// and returns result in form of HTML response containing the request parameters and result
// (formatting is up to you). Make sure to handle situations in which the parameters are incorrect
// (missing or wrong type). You can use https://nodejs.org/api/http.html as reference for
// http module

const http = require('http');
const url = require('url');
let fs = require('fs');
const data = ['add','sub','mul','div'];
const requestListener = function (req,res) {
    const queryObject = url.parse(req.url,true).query;
    console.log(typeof (queryObject));

    if (!('do' in queryObject) || !('first' in queryObject) || !('second' in queryObject)) {
        fs.readFile('7a.html', function (err,data) {
            res.writeHead(200,{ 'Content-Type':'text/html','Content-Length': data.length});
            res.write(data);
            return res.end();
        });
        return;
    }
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);

    const doData = queryObject['do'];
    let first = null;
    let second = null;
    try {
        first = parseFloat(queryObject['first']);
        second = parseFloat(queryObject['second']);
    } catch {
        return res.end(`<html><body><h1> please, check your numbers, there is error inside them </h1></body></html>`);
    }
    let result = '';
    switch (doData) {
        case 'add':
            result = first + second;
            break;
        case 'div':
            result = first / second;
            break
        case 'mul':
            result = first * second;
            break;
        case 'sub':
            result = first - second;
            break;
        default:
            return res.end(`<html><body><h1> operation doesn't exists </h1></body></html>`);
    }
    res.end(`<html><body><h1> result is: ${result} </h1></body></html>`);
}
const server = http.createServer(requestListener);
server.listen(8080);