const { Schema } = require('mongoose');

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    week: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

module.exports = playerSchema