const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>hello m umar shaikh</h1>")
})



app.listen(4000,(req,res)=>{
    console.log("server is running on port http://localhost:"+4000);
})