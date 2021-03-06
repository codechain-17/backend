import { AnswerController } from '../controllers/answerController.js';
import { QuizController } from '../controllers/quizController.js';
import { Router } from 'express';
import { getUserController } from '../controllers/userController.js';
import { loginLocalController } from '../controllers/userController.js';
import { logoutController } from '../controllers/userController.js';
import { registerLocalController } from '../controllers/userController.js';
import { JobController } from '../controllers/jobController.js';

export class ApiRouter {
    constructor() {
        this.router = Router();
        this.quizController = new QuizController();
        this.answerController = new AnswerController();
        this.getUserController = getUserController;
        this.registerLocalController = registerLocalController;
        this.loginLocalController = loginLocalController;
        this.logoutController = logoutController;
        this.jobController = new JobController();
    }

    start() {
        this.router.post('/job', this.jobController.getJob);
        this.router.post('/job/create', this.jobController.addJob);
        this.router.get('/quiz/:category', this.quizController.getQuiz);
        this.router.post('/quiz/create', this.quizController.createQuiz);
        this.router.post('/quiz/:category/addquestions', this.quizController.addQuestion);
        this.router.post('/:version/answer/add', this.answerController.addAnswer);
        this.router.get('/getuser', this.getUserController);
        this.router.get('/logout', this.logoutController);
        this.router.post('/register', this.registerLocalController);
        this.router.post('/login', this.loginLocalController)

        return this.router;
    }
}