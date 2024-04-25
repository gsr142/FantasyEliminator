const { Schema, model } = require('mongoose');

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
        required: false,
    },
    id: {
        type: String,
        required: true
    }
});


const Player = model('Player', playerSchema);
module.exports = Player;