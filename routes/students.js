const experss = require('express')
const router = experss.Router()
const Student = require("../models/student")

router.get('/', async(req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const student1 = new Student({
        name: req.body.name,
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

module.exports = router