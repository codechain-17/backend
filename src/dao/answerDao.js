import { Answer } from "../models/answer.js";
import { QuizDao } from "./quizDao.js";
import { mongoToObject } from '../utils/index.js'
import moment from 'moment'
export class AnswerDao {
    constructor() {
        this.quizDao = new QuizDao();

    }

    async getAnswer(query) {
        const res = await Answer.findOne(query);
        return mongoToObject(res);
    }

    async getQuiz(category) {
        const res = await this.quizDao.getQuiz(category);
        return mongoToObject(res);
    }

    async addAnswer(answer) {
        const userId = answer.userId;
        const quizes = answer.quizes
        const existedAnswer = await this.getAnswer({ userId: userId });
        const quantityAdd = existedAnswer.length ? existedAnswer[0].quizes.length : 0;
        const newQuizes = await this.getNewQuizes(quizes, quantityAdd);

        if (existedAnswer.length) {
            await Answer.updateOne({ userId: userId }, { $push: { quizes: newQuizes } });
        } else {
            const newAnswer = { userId: userId, quizes: newQuizes }
            await Answer.create(newAnswer);
        }
        const res = {
            totalQuestion: newQuizes[0].questions.length,
            score: newQuizes[0].score,
        }
        return res
    }

    async getNewQuizes(quizes, cantAdd) {

        const existedQuiz = await this.getQuiz(quizes[0].category);
        let score;

        if (existedQuiz.length) {
            return quizes.map((quiz, index) => {
                score = 0;
                quiz.questions.forEach((question, index) => {
                    question.alternatives.forEach((alternative, index) => {
                        let answer = existedQuiz[0].questions.find(q => q.id === question.id).alternatives.find(a => a.id === alternative.id);
                        if (answer) {
                            score += (alternative.answer === answer.isCorrect) && answer.isCorrect ? 1 : 0;
                        }
                    })
                })

                return {
                    date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    id: index + cantAdd,
                    category: quiz.category,
                    score: score,
                    questions: quiz.questions,
                }
            })
        } else {
            throw new Error('Quiz does not exists');
        }

    }

}

