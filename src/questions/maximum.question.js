import BaseQuestion from './base.question.js'
class MaximumQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 30

    constructor() {
        super()
        this.numbers = this.randomNumbers(4)
        this.question = `de esta lista de numeros ${this.numbers.join(',')} cual es el mayor?`
        this.answer = Math.max(this.numbers)
    }

    checkAnswer(answerUser) {
        this.answer = Math.max(this.numbers)
        return this.answer === answerUser
    }
}

export default MaximumQuestion