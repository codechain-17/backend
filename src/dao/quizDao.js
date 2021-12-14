import { Quiz } from "../models/quiz.js";
import { mongoToObject } from '../utils/index.js'

export class QuizDao {
    constructor() {

    }

    async getQuiz(category) {
        const res = await Quiz.findOne({ category: category });
        return mongoToObject(res);
    }

    async createQuiz(category) {
        const existedCategory = await this.getQuiz(category);
        if (!existedCategory.length) {
            return await Quiz.create({ category: category });
        } else {
            throw new Error('Quiz already exists');
        }
    }

    async addQuestion(category, questions) {
        const existedCategory = await this.getQuiz(category);
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
            return await Quiz.updateOne({ category: category }, { $push: { questions: newQuestions } });
        } else {
            throw new Error('Quiz does not exists');
        }
    }
}

