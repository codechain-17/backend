import { Quiz } from "../models/quiz.js";
import { mongoToObject } from '../utils/index.js'

export class QuizDao {
    constructor() {

    }

    async getAnswer(category, question, alternative) {
        try {
            const res = await this.getQuiz(category);
            if (res.length) {
                const questionId = res[0].questions.findIndex(q => q.question === question);
                const alternativeId = res[0].questions[questionId].alternatives.findIndex(a => a.text === alternative);
                return res[0].questions[questionId].alternatives[alternativeId].answer;
            } else {
                throw new Error('Quiz does not exists');
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    async getQuiz(category) {
        const res = await Quiz.findOne({ category: category }).select('-questions.alternatives.isCorrect');

        return res;
    }

    async createQuiz(category) {
        const existedCategory = await this.getQuiz(category);
        if (!existedCategory) {
            return await Quiz.create({ category: category });
        } else {
            throw new Error('Quiz already exists');
        }
    }

    async addQuestion(category, questions) {
        const res = await this.getQuiz(category);
        const existedCategory = mongoToObject(res);
        if (existedCategory) {
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

