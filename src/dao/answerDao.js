import { Answer } from "../models/Answer.js";
import { mongoToObject } from '../utils/index.js'
import moment from 'moment'
export class AnswerDao {
    constructor() {

    }

    async getAnswer(query) {
        const res = await Answer.findOne(query);
        return mongoToObject(res);
    }

    async calculateScore(userId, answers) {
        const { category } = answers;
        const existedCategory = await this.getAnswer({ userId, category });
        if (existedCategory.length) {
            const { questions } = existedCategory[0];
            const score = questions.reduce((acc, question) => {
                const { alternatives } = question;
                const { id } = alternatives.find(alternative => alternative.isCorrect);
                const { id: answerId } = answers.questions.find(question => question.id === question.id).alternatives.find(alternative => alternative.isCorrect);
                return id === answerId ? acc + 1 : acc;
            }, 0);
            return score;
        } else {
            throw new Error('Answer does not exists');
        }
    }

    async addAnswer(answer) {
        const userId = answer.userId;
        const quizes = answer.quizes
        const existedCategory = await this.getAnswer({ userId: userId });
        if (existedCategory.length) {
            const cantAdd = existedCategory[0].quizes.length;
            const newQuizes = quizes.map((quiz, index) => {
                return {
                    date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    id: index + cantAdd,
                    category: quiz.category,
                    alternatives: quiz.alternatives.map((alternative, index) => {
                        return {
                            id: index,
                            answer: alternative.answer,
                        }
                    })
                }
            })
            return await Answer.updateOne({ userId: userId }, { $push: { quizes: newQuizes } });
        } else {
            return await Answer.create(answer);
        }
    }

}

