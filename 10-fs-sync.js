const {readFileSync,writeFileSync}=require('fs');
console.log("Start");
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/textcont/second.txt','utf-8');
// console.log(first+" "+second);
writeFileSync('./content/result-sync.txt',`Here is the final result : ${first}, ${second}`,{flag:'a'});
console.log("Done with this one");
console.log("Starting with the next one");