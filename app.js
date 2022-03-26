const express =require("express")
const bodyParser=require("body-parser")
const app=express()
const date = require(__dirname +"/views/date.js")
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var item = ""
var newListItems=[]
var workListItems=[]

app.get("/",function(req,res){
    let day = date()
    res.render("list",{Heading:day,newListItems})
})
app.get("/work",function(req,res){
    res.render("list",{Heading:"Work List",newListItems:workListItems})
    
})
app.get("/about",function(req,res){
    res.render("about")
    
})
app.post("/",function(req,res){
    item = req.body.newItem
    if(req.body.submit =="Work"){
        workListItems.push(item)
        res.redirect("/work")
    }else{
        newListItems.push(item)
        res.redirect("/")
    }
})

app.listen(3000,function(){
    console.log("server is runing on port number 3000")
})