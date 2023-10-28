const express=require('express');
const PORT=3000;
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

let blogArray=[{name:"islam",age:24,id:2}];



app.post('/blogs',(req,res)=>{
    blogArray.push({
        name:req.body.name,
        age:req.body.age,
        id:Math.floor(Math.random()*1000)
    })
    return res.json({
data:blogArray
    })
})
app.get('/blogs',(req,res)=>{
    return res.json({
        data:blogArray
    })
})

// app.get('blogs/:id',(req,res)=>{
    
//     const ans=blogArray.filter((blog)=>blog.id==req.body.id)

//      return res.json({
//         data:ans
//      })
// })

app.delete('/blogs/2',(req,res)=>{

    console.log("ioejojf");
})


app.listen(PORT,()=>{
    console.log("server is started on "+PORT);
})