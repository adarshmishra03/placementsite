const mongoose = require('mongoose');

const StudentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyname:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    ctc:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        default: Date.now()
    }
});

module.exports = mongoose.model('Students',StudentsSchema);