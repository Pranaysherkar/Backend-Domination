const express = require(`express`);
const app = express();

app.get('/',(req,res)=>{
    res.send("It is home route")
});
app.get('/about',(req,res)=>{
    res.send("It is about route")
});
app.get('/blog',(req,res)=>{
    res.send("It is blog route")
});

app.listen(4000)