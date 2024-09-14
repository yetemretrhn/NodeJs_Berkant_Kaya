const http = require('http');
const server = http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            res.end("Ana Sayfa");
            break;
        case "/about":
            res.end("Hakkımızda");
            break;
        default:
            res.end("404-Sayfa Bulunamadı");
            break;
    }
});

server.listen(8000,()=>{
    console.log("server çalıştı:8000 portunda");
})
