import json from './public/api' 
import express from 'express'
import { Login } from './public/checkLogin'
const app = express()

app.get('/api/checkLogin', function(req, res){
    res.setHeader('Content-Type', 'application/typescript');
    res.end(Login)
})

app.get('/api/todo',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json, null, 3));
})

app.listen(3030);