import BaseQuestion from './base.question.js'

class PrimeQuestion extends BaseQuestion {
    answer = null
    numbers = []
    question = ''
    points = 60

    constructor() {
        super()
        this.numbers = this.randomNumbers(10)
        this.question = `indica que números de esta lista son primos ${this.numbers.join(', ')}`
    }

    isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }


    checkAnswer(answerUser) {
        this.answer = this.numbers.filter((number) => {
            return this.isPrime(number)
        })

        if (this.answer.length !== answerUser.length) {
            return false;
        }
        const result = this.answer.every((number) => {

            return answerUser.includes(number)
        })

        return result
    }

}

export default PrimeQuestion