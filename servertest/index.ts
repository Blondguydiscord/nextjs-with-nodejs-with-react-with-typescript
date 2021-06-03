import json from './public/api' 
import express from 'express'
import { Login } from './public/checkLogin'
const app = express()
var acess = false

function view(){
    const username = "t"
    const pass = "t"
    const foo1 = prompt('Username')
    const foo2 = prompt('Password')
    
    if(foo1 == username && foo2 == pass){
        acess = true
        app.get('/api/checkLogin', function(req, res){
            res.setHeader('Content-Type', 'application/typescript');
            res.end(Login)
        })
        
        app.get('/api/todo',function (req,res) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(json, null, 3));
        })
    }   else{
        alert('Wrong! You are fake!')
        acess = false
    }
}

app.listen(3030);

export default acess