import express from 'express'
import axios from 'axios'
import LeaderBoard from '../model/leaderboard.js'
import MyLogger from '../service/logger.js'
import rounds from '../service/questions.factory.js'
import Score from '../model/score.js';
const router = express.Router();
let game
let round = 0
let status = false
const numbersOfRound = rounds.length;
const leaderboard = LeaderBoard.getInstance();
const myLogger = MyLogger.getInstance();

function makeRequest(player, roundType) {
    const playerCurrent = leaderboard.players.find(playerLeaderboard => player.id === playerLeaderboard.id)
    axios.get(player.host + '?q=' + roundType.question)
        .then(response => {
            // const isCorrectAnswer = roundType.answer === response.data.answer
            console.log(response.data.answer);
            const isCorrectAnswer = roundType.checkAnswer(response.data.answer)
            const points = isCorrectAnswer ? roundType.points : (roundType.points * -1)
            const type = isCorrectAnswer ? 'SUCCESS' : 'WRONG'
            myLogger.register(type, player, roundType.question, points)
            playerCurrent.score += points
        })
        .catch(error => {
            console.log(error)
            playerCurrent.score += Score.ECONNREFUSED
            myLogger.register('ERROR', player, roundType.question, Score.ECONNREFUSED)
        });
}

function initGame() {

    game = setInterval(() => {
        const roundActual = rounds[round]
        const roundType = new roundActual[aleatorio(0, roundActual.length)]()
        for (const player of leaderboard.players) {
            makeRequest(player, roundType)
        }

    }, 3000)
}

function aleatorio(a, b) {
    return Math.floor(Math.random() * (b - a)) + a
}

router.get('/start', function (req, res) {
    initGame()
    status = true
    res.send(true);
});

router.get('/status', function (req, res) {
    console.log(round)
    res.json({ running: status, round });
});

router.get('/next', function (req, res) {
    console.log(round)
    if (round < numbersOfRound - 1) {
        round += 1
    }
    res.send(true);

});

router.get('/stop', function (req, res) {
    clearInterval(game);
    status = false
    res.send(true);
});

router.get('/reset', function (req, res) {
    clearInterval(game)
    status = false
    round = 0
    leaderboard.players = []
    res.send(true)
});

router.get('/get-actual-round', function (req, res) {
    res.send(this.round);
});

router.get('/leaderboard', function (req, res) {
    res.json(leaderboard.players);
});

export { router };