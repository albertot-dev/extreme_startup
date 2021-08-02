
import GeneralKnowJson from "../service/json.question.readed.js";
import BaseQuestion from './base.question.js'

export default class JSONQuestion extends BaseQuestion {

    points = 10

    constructor() {
        super();

        const questions = GeneralKnowJson.getInstance();
        const max = questions.generalKnowQuestions.length
        const indexQuestion = Math.floor(Math.random() * (max - 0)) + 0;
        this.question = questions.generalKnowQuestions[indexQuestion].question
        this.answer = questions.generalKnowQuestions[indexQuestion].answer
    }
}