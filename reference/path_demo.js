const { dirname } = require('path');
const path = require('path');

//base filename
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extention
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename).base);

//concatnate paths
console.log(path.join(dirname, 'test', 'hello.html'));




