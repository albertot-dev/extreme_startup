import BaseQuestion from './base.question.js'

class AdditionQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 20

    constructor() {
        super()
        this.numbers = this.randomNumbers().slice(0, 2)
        this.question = `cuanto es ${this.numbers[0]} mas ${this.numbers[1]}`

    }

    checkAnswer(answerUser) {
        this.answer = this.numbers[0] + this.numbers[1]

        return this.answer === answerUser
    }
}

export default AdditionQuestion