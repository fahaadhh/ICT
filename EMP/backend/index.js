//import
const express = require('express')
require('./connection')
const EmpModel = require('./models/employee')
//initialize
const app = express();

//middleware
app.use(express.json());

//api create
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/trial', (req, res) => {
    res.send('Trial API')
})

//port setting
app.listen(3004, () => {
    console.log('server is running on 3004.')
})
//api create
app.post("/add", async (req, res) => {
    try {
        await EmpModel(req.body).save()
        res.send({ message: "Data Added." })
        
    } catch (error) {
        console.log(error)
    }
})
//view
app.get('/view', async (req, res) => {
    try {
        var data=await EmpModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
    }
})    
app.delete('/remove/:id', async (req, res) => {
    try {
        await EmpModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Data Deleted." })

    } catch (error) {
        console.log(error)
    }
})
app.put('/update/:id', async (req, res) => {
    try {
        await EmpModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "Data Updated." })
    } catch (error) {
        console.log(error)
    }
})