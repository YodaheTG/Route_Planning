
const express = require ('express');
const app = express();
const layer = require('./query')
app.listen(3000);

app.use(express.static('public'));
app.get('/',(req,res)=>{
   res.send('./public/index.html',{root: __dirname})
});
const lib = require("./query");
const result = lib.add_geo();

 
 