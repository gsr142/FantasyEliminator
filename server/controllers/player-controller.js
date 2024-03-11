// import player model
const { Player } = require("../models");

module.exports = {
  async populateDB() {
    const url =
      "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host":
          "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  },
  // get player(s) by name
  async getPlayerByName({ params }, res) {
    const foundPlayer = await Player.findOne({ name: params.name });
    if (!foundPlayer) {
      return res
        .status(400)
        .json({ message: "Cannot find a player with this name!" });
    }
    res.json(foundPlayer);
  },

  // get players by position
  async getPlayersByPosition({ params }, res) {
    const foundPlayers = await Player.find({ position: params.position });
    if (!foundPlayers) {
      return res
        .status(400)
        .json({ message: "Cannot find players with this position!" });
    }
    res.json(foundPlayers);
  },
};
