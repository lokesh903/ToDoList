const express =require("express")
const bodyParser=require("body-parser")
const app=express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var item = ""
var newListItems=[]
app.get("/",function(req,res){
    var today =new Date();
    var currentDay =today.getDay()
    var options = { weekday: 'long', month: 'long', day: 'numeric' }
    var day =today.toLocaleDateString("en-US",options)

    res.render("list",{DayOfWeek:day,newListItems})
})

app.post("/",function(req,res){
    item = req.body.newItem
    newListItems.push(item)
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("server is runing on port number 3000")
})