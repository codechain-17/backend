import EntrepreneurshipDaoMongo from '../dao/entrepreneurshipDao.mongo.js';
import { info, error } from '../config/logger.js';
import config from '../config/index.js';
/** API Rest **/
export class EntrepreneurshipController {

    /**
     * Factory. If needed other database, just add in enviroment, dao, and de clause over if
     * @param {string} config  
     *      database type
     */
    constructor(config) {
        if (config == "Mongo") {
            this.entrepreneurshipDao = new EntrepreneurshipDaoMongo();
        }
    }

    getByType = async (req, res) => {
        try {
            const filter = { 'challenges.type': req.params.type }
            let result = await this.entrepreneurshipDao.getBy(filter);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    getById = async (req, res) => {
        try {
            const filter = { email: req.params.email }
            let result = await this.entrepreneurshipDao.getBy(filter);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    uploadPhoto = async (req, res) => {
        try {
            const { email, id } = req.params;
            const result = await this.entrepreneurshipDao.addFile(email, req.file.filename);
            res.status(200).json();
        }
        catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

    create = async (req, res, next) => {
        try {
            info(req.body);
            const file = req.file === undefined ? null : req.file.filename
            const entrepreneurship = { ...req.body, file };
            const createdEntrepreneurship = await this.entrepreneurshipDao.create(entrepreneurship)
            res.status(200).json(entrepreneurship);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }


    addQuestions = async (req, res, next) => {
        try {
            const { id, email } = req.params;
            const questions = req.body;
            const updatedEntrepreneurship = await this.entrepreneurshipDao.addQuestions(email, id, questions);
            res.status(200).json(updatedEntrepreneurship);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

    addChallenge = async (req, res, next) => {
        try {
            const { email } = req.params;
            const challenge = req.body;
            const updatedEntrepreneurship = await this.entrepreneurshipDao.addChallenge(email, challenge);
            res.status(200).json(updatedEntrepreneurship);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

    updateChallenge = async (req, res, next) => {
        try {
            const { id, email } = req.params;
            const challenge = req.body;
            const updatedEntrepreneurship = await this.entrepreneurshipDao.updateChallenge(email, id, challenge);
            res.status(200).json(updatedEntrepreneurship);
        } catch (err) {
            res.status(500).json(err.message);
            error(err.message);
        }
    }

    getAnalytics = async (req, res, next) => {
        try {
            const { email } = req.params;
            const analytics = await this.entrepreneurshipDao.getAnalytics();
            res.render('analytics', { data: analytics });
        } catch (err) {
            error(err.message);
        }
    }

}
