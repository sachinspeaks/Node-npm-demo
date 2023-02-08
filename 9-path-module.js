const path=require('path');

//path separator(os specific)
console.log(path.sep);

// path join(joins a sequence of path segments)
const filepath=path.join('/content','testcont','test.txt');
console.log(filepath);

//base name(returns last portion of a path)
const base=path.basename(filepath);
console.log(base);

//resolve the absolute path
const absolute=path.resolve(__dirname,'content','textcontent','test.txt');
console.log(absolute);