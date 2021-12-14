import { error, info } from '../config/logger.js';

import EntrepreneurDaoMongo from '../dao/entrepreneurDao.mongo.js';
import config from '../config/index.js';
/** API Rest **/
export class EntrepreneurController {

    /**
     * Factory. If needed other database, just add in enviroment, dao, and de clause over if
     * @param {string} config  
     *      database type
     */
    constructor(config) {
        if (config == "Mongo") {
            this.entrepreneurDao = new EntrepreneurDaoMongo();
        }
    }

    create = async (req, res, next) => {
        try {
            const entrepreneur = req.body;
            info(req.body);
            const createdEntrepreneur = await this.entrepreneurDao.create(entrepreneur);
            res.status(200).json(entrepreneur);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const entrepreneur = await this.entrepreneurDao.getEntrepreneur(email, password);
            res.status(200).json(entrepreneur);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

}

