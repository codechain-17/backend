import { AnswerController } from '../controllers/answerController.js';
import { QuizController } from '../controllers/quizController.js';
import { Router } from 'express';
import { getUserController } from '../controllers/userController.js';
import { loginLocalController } from '../controllers/userController.js';
import { logoutController } from '../controllers/userController.js';
import { registerLocalController } from '../controllers/userController.js';
export class ApiRouter {
    constructor() {
        this.router = Router();
        this.quizController = new QuizController();
        this.answerController = new AnswerController();
        this.getUserController = getUserController;
        this.registerLocalController = registerLocalController;
        this.loginLocalController = loginLocalController;
        this.logoutController = logoutController;
    }

    start() {
        this.router.get('/quiz/:category', this.quizController.getQuiz);
        this.router.post('/quiz/create', this.quizController.createQuiz);
        this.router.post('/quiz/:category/addquestions', this.quizController.addQuestion);
        this.router.post('/answer/calculate', this.answerController.calculateScore);
        this.router.post('/answer/add', this.answerController.addAnswer);
        this.router.get('/getuser', this.getUserController);
        this.router.get('/logout', this.logoutController);
        this.router.post('/register', this.registerLocalController);
        this.router.post('/login', this.loginLocalController)

        return this.router;
    }
}