const express=require('express');
const PORT=3000;
const app=express();

app.get('/',(req,res)=>{
   res.json({
    title:"uzer",
    des:"he is chutiya"
   })
})
app.listen(PORT,()=>{
    console.log("server is started on "+PORT);
})