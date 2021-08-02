import BaseQuestion from './base.question.js'

class PowerQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 30

    constructor() {
        super()
        this.numbers = this.randomNumbers().slice(0, 2)
        this.question = `si elevas ${this.numbers[0]} a la potencia de ${this.numbers[1]} cual es el resultado?`
    }

    checkAnswer(answerUser) {
        this.answer = this.numbers[0] ** this.numbers[1]
        return this.answer === answerUser
    }

}

export default PowerQuestion