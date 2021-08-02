class PrivateLeaderBoard {
    constructor() {
        this.players = []
    }
}

class LeaderBoard {
    constructor() {
        throw new Error('Use Singleton.getInstance()')
    }
    static getInstance() {
        if (!LeaderBoard.instance) {
            LeaderBoard.instance = new PrivateLeaderBoard()
        }
        return LeaderBoard.instance
    }
}

export default LeaderBoard;