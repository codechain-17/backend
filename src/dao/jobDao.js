import { Job } from "../models/job.js";
import { mongoToObject } from '../utils/index.js'
import moment from 'moment'
export class JobDao {
    constructor() {
    }

    async getJob(query) {
        const res = await Job.findOne(query);
        return res;
    }

    async addJob(newjob) {
        const existedJob = await this.getJob({ "user.username": newjob.user.username });

        if (existedJob) {
            return await Job.updateOne({ "user.username": newjob.user.username }, { $push: { jobs: newjob.jobs } });
        } else {
            return await Job.create(newjob);
        }
    }

}

