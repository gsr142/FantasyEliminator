// import player model
const { Player } = require('../models');

module.exports = {
    // get player(s) by name
    async getPlayerByName({ params }, res) {
        const foundPlayer = await Player.findOne({ name: params.name });
        if (!foundPlayer) {
            return res.status(400).json({ message: 'Cannot find a player with this name!' });
        }
        res.json(foundPlayer);
    },

    // get players by position
    async getPlayersByPosition({ params }, res) {
        const foundPlayers = await Player.find({ position: params.position });
        if (!foundPlayers) {
            return res.status(400).json({ message: 'Cannot find players with this position!' });
        }
        res.json(foundPlayers);
    },
}