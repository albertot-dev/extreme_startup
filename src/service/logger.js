class PrivateLogger {
    constructor() {
        this.log = {}
    }

    register(type, player, question, points) {
        this.log[player.id] = { type, question }
        console.log(`question: ${question} player: ${player.name} type: ${type} points: ${points}`)
    }
}

class MyLogger {
    constructor() {
        throw new Error('Use Singleton.getInstance()')
    }
    static getInstance() {
        if (!MyLogger.instance) {
            MyLogger.instance = new PrivateLogger()
        }
        return MyLogger.instance
    }
}

export default MyLogger;