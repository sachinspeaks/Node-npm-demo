const {readFile,writeFile}=require('fs');
console.log("start");
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/textcont/second.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result-async.text',`Here is the result ${first},${second}`,(err,result)=>{
            if(err)
            {
                console.log(err);
                return ;
            }
            console.log("Done with this one");
        });
    })
})
console.log("Starting the next one")