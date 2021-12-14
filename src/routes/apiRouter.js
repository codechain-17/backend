import { Router } from 'express';
import { QuizController } from '../controllers/quizController.js';
import { AnswerController } from '../controllers/answerController.js';
import config from '../config/index.js';
import multer from 'multer';
export class ApiRouter {
    constructor() {
        this.router = Router();
        this.quizController = new QuizController();
        this.answerController = new AnswerController();
    }

    start() {
        this.router.get('/quiz/:category', this.quizController.getQuiz);
        this.router.post('/quiz/create', this.quizController.createQuiz);
        this.router.post('/quiz/:category/addquestions', this.quizController.addQuestion);
        this.router.post('/answer/calculate', this.answerController.calculateScore);
        this.router.post('/answer/add', this.answerController.addAnswer);

        return this.router;
    }
}