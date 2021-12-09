const mongoose = require('mongoose')

const studentScheama = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    tech: {
        type: String,
        requred: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Student', studentScheama)