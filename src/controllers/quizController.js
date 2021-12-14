import { QuizDao } from '../dao/quizDao.js';
import { error } from '../config/logger.js';

export class QuizController {
    constructor() {
        this.quizDao = new QuizDao();
    }

    getQuiz = async (req, res) => {
        try {
            const { category } = req.params;
            const quiz = await this.quizDao.getQuiz(category);
            res.status(200).json(quiz);
        } catch (err) {
            res.status(500).json({ err });
            error(err);
        }
    }

    createQuiz = async (req, res) => {
        try {
            const { category } = req.body;
            const quiz = await this.quizDao.createQuiz(category);
            res.status(200).json(quiz);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }

    addQuestion = async (req, res) => {
        try {
            const { category } = req.params;
            const { questions } = req.body;
            const quiz = await this.quizDao.addQuestion(category, questions);
            res.status(200).json(quiz);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }
}