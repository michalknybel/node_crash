const url = require('url');

const myUrl = new URL('http://mywebside.com/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//root domain
console.log(myUrl.host);
//hostname
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//loop trough params
myUrl.searchParams.forEach((value, name) => console.log(name+':'+value));