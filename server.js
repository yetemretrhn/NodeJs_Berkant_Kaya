const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.appendFile('log.txt',req.url,(err,html)=>{
        if(err){
            throw new Error('hata');
        }else{
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
        }
    })

});

server.listen(8000,()=>{
    console.log("server çalıştı:8000 portunda");
})
