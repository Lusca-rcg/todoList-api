const express = require ('express');
const bodyParser = require ('body-parser');
const uuid= require('uuid');
const app = express();
const tasks = []
const port = 3000

app.use(bodyParser.json());

app.listen(port,() => {
    console.log('Server is running... http://localhost:3000')
})

app.get("/", (req,res) => {
    res.json(tasks)
})

app.post('/',(req,res) => {

    const {id, nome, descricao, status} = req.body
    const newId = uuid.v4()
    tasks.id = newId
   
    tasks.push({
       
        nome: nome,
        decricao: descricao,
        status: status,
        id: newId
        })
    res.json({ tasks })
    
        
})

app.delete('/:id',(req,res) =>{
    const taskId = req.params.id
    const taskIndex = tasks.findIndex((task) => task.id === taskId)
    
    if (taskIndex.splice !== -1){
        tasks.splice(taskIndex, 1)
        res.json({message: "Tarefa removida."})
    } else{
        res.status(404).json({message: "Tarefa nao encontrada"})
    }

})
