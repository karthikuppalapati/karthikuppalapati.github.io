const { response } = require('express')
const express= require('express')
const app=express()
const request=require('request')
app.set('view engine','ejs')
app.use(express.static("public"))
const url='https://www.omdbapi.com/?apikey=da8656a5&s='

app.get('/',(req,res) =>{
    res.render('search')
})

app.get('/results',(req,res) =>{
    movieName=req.query.movieName
    request(url+movieName,(error,response,body) =>{
        if(!error && response.statusCode==200)
        {   
           const data=JSON.parse(body)
           console.log(data)
           res.render('results',{data:data, movieName:movieName})
        }
    })
})

app.listen(3000,() =>{
    console.log("serving on port 3000")
})