/* API layer */
const experss = require('express')
const router = experss.Router()
const Student = require("../models/student")

router.get('/stu', async(req, res) => {     //pass the data to the frunt end 
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const student1 = new Student({
        name: req.body.name,        //take the name of the student and assign in to the student1 constant
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const s1 = await student1.save()
        res.json(s1)
    } catch(err) {
        res.send("Error")
    }
})

router.delete('/', async(req, res) => {
    const deleteStudent = req.body.id;
    deleteStudent.

})

module.exports = router