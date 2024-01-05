const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(bodyParser.json());

app.listen(3000,() => {
    console.log('Server is running... http://localhost:3000')
})

app.get("/", (req,res) => {
    res.json({ message: "Hello, World!"})
})