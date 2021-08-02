import BaseQuestion from './base.question.js'

class MultiplicationQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 20

    constructor() {
        super()
        this.numbers = this.randomNumbers().slice(0, 2)
        this.question = `cual es el resultado de multiplicar ${this.numbers[0]} por ${this.numbers[1]}`
        this.answer = this.numbers[0] * this.numbers[1]
    }

    checkAnswer(answerUser) {
        this.answer = this.numbers[0] * this.numbers[1]
        return this.answer === answerUser
    }

}

export default MultiplicationQuestion