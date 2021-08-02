import BaseQuestion from "./base.question.js"

export default class Warmup extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 0

    constructor() {
        super()
        this.numbers = this.randomNumbers().slice(0, 2)
        this.question = `devuelve "calentamiento"`
        this.answer = "calentamiento"
    }
}
