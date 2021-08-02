import BaseQuestion from './base.question.js'

class SubtractionQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 20

    constructor() {
        super()
        this.numbers = this.randomNumbers(2)
        this.question = `cuanto es ${this.numbers[0]} menos ${this.numbers[1]}`
        this.answer = this.numbers[0] - this.numbers[1]
    }
}

export default SubtractionQuestion