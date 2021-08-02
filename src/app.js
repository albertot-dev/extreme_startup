
import express from 'express'
import LeaderBoard from './model/leaderboard.js'
import { router as playerController } from './controller/player.controller.js'
import { router as gameController } from './controller/game.controller.js'

const app = express()
const port = 3001

export function startServer() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/', express.static('public'))

    app.use('/api/', playerController)
    app.use('/api/', gameController)

    app.use('/dummy', (req, res) => {
        const leaderboard = LeaderBoard.getInstance()

        res.json(leaderboard.players)
    })

    app.listen(port, () => {
        console.log(`Example app listening at http: //localhost:${port}`)
    })

}