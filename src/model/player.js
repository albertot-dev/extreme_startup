import ulid from 'ulid'

class Player {
    constructor(name, host) {
        this.id = ulid.ulid()
        this.name = name
        this.host = host
        this.score = 0

    }
}

export default Player