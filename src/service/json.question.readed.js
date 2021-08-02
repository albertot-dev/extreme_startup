import fs from 'fs';
import path from 'path'

class PrivateGeneralKnowJson {
    constructor() {
        let rawdata = fs.readFileSync(path.resolve("src/service/general-know.json"))
        this.generalKnowQuestions = JSON.parse(rawdata)
    }
}

class GeneralKnowJson {
    constructor() {
        throw new Error('Use Singleton.getInstance()')
    }
    static getInstance() {
        if (!GeneralKnowJson.instance) {
            GeneralKnowJson.instance = new PrivateGeneralKnowJson()
        }
        return GeneralKnowJson.instance
    }
}

export default GeneralKnowJson;