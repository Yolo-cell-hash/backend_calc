
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(req,res){
//   res.sendFile(__dirname +  '/index.html')
// })
var output ;

app.get('/', function(req,res){
    res.render("calculator",{result :output});
})


app.post("/index", function(req,res){


const  numb1 = Number(req.body.n1);
const  numb2 = Number(req.body.n2);
const operand = (req.body.symbol);



if(operand== '+'){
   output = numb1 + numb2;
}
else if (operand == '-') {
   output= numb1 -numb2;
}
else if (operand == '*') {
   output= numb1 * numb2;
}
else if (operand == '/') {
   output = numb1/numb2;
}
else if (operand== '%') {
   output = numb1%numb2;
}
else{
  output = "undefined";
}

// res.send("The output of the required operation is " + output );
console.log(output);
res.redirect("/");
})














app.listen(3000, function(){
  console.log("Server is live at port 3000");
})
