const http = require('http');

const server = http.createServer((req,res)=>{

    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our homepage');
        return;
    }
    else if(req.url === '/aboutus'){
        res.end('Welcome About us page');
        return;
    }
    else res.end(`
        <h1>Oops!</h1><p>We can't seem to find the page you are looking for</p>
        <a herf="/">back home</a>`
    )
    //res.end()
})

server.listen(5000)