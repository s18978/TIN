// Write nodejs script that watches directory supplied as a parameter and prints out contents
// of files that are modified to console. Use https://nodejs.org/api/fs.html to learn about
// the fs module methods, pay attention to the watch method

let path = require('path');
let fs = require('fs');
try {
    const filePath = process.argv[2];
    fs.watch(filePath,(eventType,filename) => {
        console.log(eventType);
        if (eventType === 'change') {
            console.log(`files were changed: ${filename}`);
            fs.readFile(path.join(filePath, filename), 'utf8', function (err, data) {
                if (err) { return console.log(err);
                }
                console.log('context is:')
                console.log(data);
            });
        }
    })
} catch {
    console.log('please, write the path to the folder:')
    return;
}