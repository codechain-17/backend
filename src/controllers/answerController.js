import { AnswerDao } from '../dao/answerDao.js';
import { error } from '../config/logger.js';

export class AnswerController {
    constructor() {
        this.answerDao = new AnswerDao();
    }

    addAnswer = async (req, res) => {
        try {
            const answer = await this.answerDao.addAnswer(req.body, req.params.version);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }

    getAnswer = async (req, res) => {
        try {
            const filter = { userId: req.params.userId };
            const answer = await this.answerDao.getAnswer(filter);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }
}