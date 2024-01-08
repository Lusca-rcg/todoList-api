const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const tasks = []
const port = 3000

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log('Server is running... http://localhost:3000')
})

app.get("/task", (req, res) => {
    res.json(tasks)
})

app.post('/task', (req, res) => {

    const { id, nome, status } = req.body

    tasks.push({
        nome: nome,
        status: status,
        id: id
    })
    res.json(tasks)
    
})

app.put('/:id', (req, res) => {
    const taskId = req.params.id
    const {nome, descricao, status} = req.body

    const taskIndex = tasks.findIndex((task) => task.id === taskId)       

    if (taskIndex !== -1) {
        
        tasks[taskIndex] = {
            nome: nome, 
            descricao: descricao,
            status: status
        }
        
        res.json(tasks[taskIndex])
    }
    else {
        res.status(404).json({ message: "Tarefa nao encontrada" })
    }
})

app.delete('/:id', (req, res) => {
    const taskId = req.params.id
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex.splice !== -1) {
        tasks.splice(taskIndex, 1)
        res.json({ message: "Tarefa removida." })
    }
    else {
        res.status(404).json({ message: "Tarefa nao encontrada" })
    }

})
