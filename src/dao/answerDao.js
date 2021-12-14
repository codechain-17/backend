import { Answer } from "../models/Answer.js";
import { mongoToObject } from '../utils/index.js'

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

    async addAnswer(userId, category, questions) {
        const existedCategory = await this.getAnswer(category);
        if (existedCategory.length) {
            const cantAdd = existedCategory[0].questions.length;
            const newQuestions = questions.map((question, index) => {
                return {
                    id: index + cantAdd,
                    question: question.question,
                    alternatives: question.alternatives.map((alternative, index) => {
                        return {
                            id: index,
                            text: alternative.text,
                            isCorrect: alternative.isCorrect
                        }
                    })
                }
            })
            return await Answer.updateOne({ category: category }, { $push: { questions: newQuestions } });
        } else {
            throw new Error('Answer does not exists');
        }
    }
}

