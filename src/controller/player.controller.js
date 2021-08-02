import express from 'express'
import LeaderBoard from '../model/leaderboard.js'
import Player from '../model/player.js'
const router = express.Router();

// define the about route
router.post('/add-player', function (req, res) {
    const leaderBoard = LeaderBoard.getInstance()
    const newPlayer = new Player(req.body.name, req.body.host)
    leaderBoard.players.push(newPlayer);
    res.send(true);
});

export { router };