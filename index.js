//?İçeri aktarma işemi

// const {add, sub}=require('./math');
// console.log(sub(3,5));
// console.log(add(3,5));
//?Dosya işlemleri
const fs =require('fs');
//?senkron işlem blocking işlem
// fs.writeFileSync("log.txt","test");
//?asenktron işle non-blocking işlem
// fs.writeFile("log.txt","test2",(err)=>{});

//!Dosya okuma işlemi
//?Dosya okuma işlemi, utf-8 koyarak dosyanın içindeki yazıyı anlar
// const readF = fs.readFileSync('log.txt',"utf-8");
// console.log(readF);

//!Asenkron işlemin nasıl çalıştığı
//?asenkron read okuma
// const readF=fs.readFile("log.txt","utf-8",(err,html)=>{
//     console.log(html);
// })

//!Asenkron ve senkron yapılarının mantığı -> yani blocking nonblocking
//?Senkron işlemi tamamlanmadan diğer eişlemerle geçiş yapılmaz. Bencil bir işlemdir.
// console.log("1");
// const readF=fs.readFileSync('log.txt',"utf-8");
// console.log(readF);
// console.log("2");

//?asenkron işlem bencil değildir, kendi işlemi olmazsa, altındaki işlemlerin olmasına izin verir.
// console.log("1");
// const readF=fs.readFile('log.txt',"utf-8",(err,html)=>{
//     console.log(html);
// });
// console.log("2");

//!Dosyanın içine ekleme yapma
//? AppendFile veri eklemeye yarar.
// fs.appendFileSync('log.txt',"\r\neleman eklendi");

//!Dosya Silme İşlem
// fs.unlinkSync('log.txt');

//!Dosya Oluşturma İşlemi
// fs.mkdirSync("test");

//!Dosya içine dosya oluşturma
// fs.mkdirSync("test/test2");

fs.writeFileSync('deneme.js','console.log("deneme")');