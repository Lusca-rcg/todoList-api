const express = require ('express');
const bodyParser = require ('body-parser');
const uuid= require('uuid');
const app = express();
const task = []
const port = 3000

app.use(bodyParser.json());

app.listen(port,() => {
    console.log('Server is running... http://localhost:3000')
})

app.get("/", (req,res) => {
    res.json(task)
})

app.post('/',(req,res) => {

    const {id, nome, descricao, status} = req.body
    const newId = uuid.v4()
    task.id = newId
   
    task.push({
       
        nome: nome,
        decricao: descricao,
        status: status,
         id: newId
        })
    res.json({ task })
    
        
})