import json from './public/api' 
import express from 'express'
import { Login } from './public/checkLogin'
const app = express()
const port = 3030

app.use('/public', express.static('public'))

app.get('/api/checkLogin', function(req, res){
    res.setHeader('Content-Type', 'application/typescript');
    res.end(Login)
})

app.get('/api/todo',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json, null, 3));
})

app.listen(port)

if(port == 3030){
    console.log("Running on port", port)
}