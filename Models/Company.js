const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jobProfile:{
        type: String,
        required: true
    },
    eligiblebranch:{
        type: String,
        required: true
    },
    ctc:{
        type: Number,
        required: true
    },
    cgpa:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        default: Date.now()
    }
});

module.exports = mongoose.model('Companies',CompanySchema);