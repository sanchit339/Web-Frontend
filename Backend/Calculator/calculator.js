const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , function(req , res){
    res.sendFile(__dirname + "/index.html")
})
app.post('/' , (req,res)=>{
    console.log(req.body);
    var num1 = Number(req.body.num1 );
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("thanks and it works And the sum is :- " + sum)
})

app.get('/bmicalculator' , (req,res)=>{
    res.sendFile(__dirname + "/bmi.html")
})
app.post('/bmicalculator' , (req,res)=>{
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var ans = w / (h * h);
    res.send("this is your bmi " + ans);
})
app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})  