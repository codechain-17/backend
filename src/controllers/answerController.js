import { AnswerDao } from '../dao/answerDao.js';
import { error } from '../config/logger.js';

export class AnswerController {
    constructor() {
        this.answerDao = new AnswerDao();
    }

    calculateScore = async (req, res) => {
        try {
            const { category } = req.body;
            const answer = await this.answerDao.calculateScore(category);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }

    addAnswer = async (req, res) => {
        try {
            const answer = await this.answerDao.addAnswer(req.body);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }
}