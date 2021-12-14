import { Answer } from "../models/Answer.js";
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

    async calculateScore(answer) {
        //Obtain existedQuiz
        let score = 0;

        try {
            const existedQuiz = await this.quizDao.getQuiz(answer.category);
            if (existedQuiz.length) {
                const { questions } = existedQuiz[0];
                score = await questions.reduce((acc, question) => {
                    const { alternatives } = question;
                    const answerQuestion = answer.questions.find(q => q.id === question.id);
                    if (answerQuestion) {
                        answerQuestion.alternatives.forEach(answeredAlternative => {
                            const correctAlternative = alternatives.find(a => a.id === answeredAlternative.id);
                            if (correctAlternative) {
                                if ((correctAlternative.isCorrect === answeredAlternative.answer) && correctAlternative.isCorrect) {
                                    acc += 1;
                                }
                            }
                        })
                    }
                }, 0)
            }
        } catch (err) {
            throw new Error("Error calculating score");;
        }

        return score;
    }

    async addAnswer(answer) {
        const userId = answer.userId;
        const quizes = answer.quizes
        const existedAnswer = await this.getAnswer({ userId: userId });
        const quantityAdd = existedAnswer.length ? existedAnswer[0].quizes.length : 0;
        const newQuizes = this.getNewQuizes(quizes, quantityAdd);

        if (existedAnswer.length) {
            await Answer.updateOne({ userId: userId }, { $push: { quizes: newQuizes } });
        } else {
            const newAnswer = { userId: userId, quizes: newQuizes }
            return await Answer.create(newAnswer);
        }
        return newQuizes.score;
    }

    getNewQuizes(quizes, cantAdd) {
        return quizes.map((quiz, index) => {
            // const score = await this.calculateScore(quiz);
            const score = 0;
            return {
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
                id: index + cantAdd,
                category: quiz.category,
                score: score,
                questions: quiz.questions,
            }
        })
    }

}

