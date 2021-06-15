const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const defaultRoute = require('./route');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const viewsPath=path.join(__dirname,'../templates/views')

app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/fib', defaultRoute)

app.get('*/*',(req,res)=>{
    res.send('404')
})

app.listen(5001,()=>{
    console.log("server started")
})
module.exports=app