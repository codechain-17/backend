import { Router } from 'express';
import { QuizController } from '../controllers/quizController.js';
import config from '../config/index.js';
import multer from 'multer';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
export class ApiRouter {
    constructor() {
        this.router = Router();
        this.quizController = new QuizController();
    }

    start() {
        this.router.get('/quiz/:category', this.quizController.getQuiz);
        this.router.post('/quiz/create', this.quizController.createQuiz);
        this.router.post('/quiz/:category/addquestions', this.quizController.addQuestion);
        return this.router;
    }
}