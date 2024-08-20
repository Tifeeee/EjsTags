const express = require("express")
const app = express()
const path = require("path")

//create server
const PORT = 2000
app.set("view engine","ejs")

app.set('views', path.join(__dirname, 'views')); 
app.get("/",(req,res)=>{
    let data =[
        {name:"Bolu", age: 13, height: "6 ft"},
        {name:"Mide", age: 10, height: "4 ft"},
        {name:"Priscy", age: 12, height: "5 ft"},
        
    ]
res.render("Home",{data:data})
})


app.get("/user",(req,res)=>{
    fetch("https://api.github.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        res.render("Github", {data:data})
    })
})



app.listen(PORT,()=>{
    console.log("Running");
    
})