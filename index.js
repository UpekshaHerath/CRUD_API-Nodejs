const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StudentDBex' //This can be any one 

const app = express()  //load experss

mongoose.connect(url, {useNewUrlParser: true}) //second parameter only for to avoid from the worning.
const con = mongoose.connection    //make the connection with the mongodb

//after the db connected this event will fire
con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())  //when start to work with json we have to use a app.use() 

const studentRouter = require('./routes/students')
app.use('/students', studentRouter)     //when doing routing have to use the use() 

//listening for the server and if the server started fire the function
app.listen(9000, () => {
    console.log('Server started')
})


