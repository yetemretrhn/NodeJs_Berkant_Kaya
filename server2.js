const express=require('express');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

//GET, POST, PUT-PATCH, DELETE -> HttpMethods
const products=[
    {name:"Telefon",id:0,price:1000},
    {name:"Tv",id:1,price:2000},
    {name:"Bilgisayar",id:2,price:3000}
]

app.use('/detail/:id',(req,res)=>{
    const detailProduct = products.find(pr=>pr.id==req.params.id);
    res.render('detail',{detailProduct});
});

app.use('/',(req,res,next)=>{
    console.log("Burası middleware katmanı çalıştı.");
    next(); //? Burası olmasaydı ana sayfa yani next işlem çalışmazdı.
})

app.use('/',(req,res)=>{
    // res.send("Burası express ile oluşturulan hakkımızda sayfasıdır.");
    res.render('products',{products:products});
});



app.listen(8000,()=>{
    console.log("Server çalıştıııı:8000 portu üzerinden");
});