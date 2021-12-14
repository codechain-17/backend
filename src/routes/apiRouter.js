import { Router } from 'express';
import config from '../config/index.js';
import multer from 'multer';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

// SET STORAGE


export class ApiRouter {
    constructor() {
        this.router = Router();
    }

    start() {

        this.router.post();
        return this.router;
    }
}