import Mongo from '../db/dbMongo.js';
import config from '../config/index.js';
import admin from 'firebase-admin';

/** load services that app needed */
export const load = async (http) => {
    try {
        const db = await eval(`${config.flagDB}.getInstance()`);
        await db.connect();

    } catch (error) {
        throw new Error(error);
    }
};

