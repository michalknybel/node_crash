const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
   if (err) throw err;
   console.log('folder created');
});

//create and write a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', function(err){
    if (err) throw err;
    console.log('file written to');
});

//append file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', function(err){
    if (err) throw err;
    console.log('file written to');
});

//read file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err, data){
    if (err) throw err;
    console.log('file renamed');
});