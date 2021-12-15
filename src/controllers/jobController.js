import { JobDao } from '../dao/jobDao.js';
import { error } from '../config/logger.js';

export class JobController {
    constructor() {
        this.jobDao = new JobDao();
    }

    addJob = async (req, res) => {
        try {
            const answer = await this.jobDao.addJob(req.body);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }

    getJob = async (req, res) => {
        try {
            const filter = { userId: req.params.userId };
            const answer = await this.jobDao.getJob(filter);
            res.status(200).json(answer);
        } catch (err) {
            res.status(500).json(err.message);
            error(err);
        }
    }
}