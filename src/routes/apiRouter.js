import { Router } from 'express';
import { getUserController } from '../controllers/userController.js';
import { loginLocalController } from '../controllers/userController.js';
import { logoutController } from '../controllers/userController.js';
import { registerLocalController } from '../controllers/userController.js';

export class ApiRouter {
    constructor() {
        this.getUserController = getUserController;
        this.registerLocalController = registerLocalController;
        this.loginLocalController = loginLocalController;
        this.logoutController = logoutController;
        this.router = Router();
    }

    start() {

        this.router.get('/getuser', this.getUserController);
        this.router.get('/logout', this.logoutController);
        this.router.post('/register', this.registerLocalController);
        this.router.post('/login', this.loginLocalController)

        return this.router;
    }
}

