const express=require("express")
const path = require("path")
const app=express()
const port=5000

app.use('/static2',express.static('static2'))

app.set('views',path.join(__dirname,"/static2/views"))
// app.use('/style',express.static('/style'))

app.set('view engine',"pug")


app.get('/',(req,res)=>{
    res.status(200).render("index.pug")
})
app.get('/contactus',(req,res)=>{
    res.status(200).render("contact.pug")
})

app.get('/about',(req,res)=>{
    res.status(200).render("about.pug")
})

app.listen(port,(res,req)=>{
    console.log(`The server is listerning at ${port}`)
})