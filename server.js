let express=require("express")
let app=express()
let port=5000

app.use('/myapi',(req,res)=>{
    res.send("<h1>Hello,world!</h1>")
})

app.listen(port,()=>{
    console.log(`Server is loading in port ${port}`);
})