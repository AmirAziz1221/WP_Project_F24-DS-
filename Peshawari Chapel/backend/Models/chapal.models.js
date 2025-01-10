const mongoose=require('mongoose');

const chapelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Correct spelling is 'required'
    },
    price: {
        type: Number,
        required: true
    }
});


const Chapel = mongoose.model('Chapel',chapelSchema );

module.exports = Chapel; 