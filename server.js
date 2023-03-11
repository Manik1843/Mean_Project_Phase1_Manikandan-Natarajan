const express = require('express');
const path = require('path');

let intial_Path = path.join(__dirname,"public");

const app = express();
app.use(express.static(intial_Path));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect Popper JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/',(req,res)=>{
    res.sendFile(path.join(intial_Path,"index.html"));
})

app.post('/',function(req,res){
    debugger;
    alert('1');
 });

app.listen("8001",()=>{
    console.log('Listening..');
})