const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcometo our home page')
    }
    if(req.url==='/about')
    {
        res.end('Here is our short history')
    }
    res.end(
        `<h1>Oops!!</h1>
        <p>We cant find the page you requested.</p>
        <a href="/">Back to Homejjj</a>`
    )
})
server.listen(5000); 