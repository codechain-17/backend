import { Entrepreneurship } from '../models/entrepreneurship.mongo.js';
import { Entrepreneur } from '../models/entrepreneur.mongo.js';
import { mongoToObject } from '../utils/index.js'
import { sendMail } from '../helper/index.js'
import { validateNewEntrepreneurship } from '../validations/item.js';
export default class EntrepreneurshipDaoMongo {

    constructor() {

    }

    async getBy(filter) {
        const res = await Entrepreneurship.find(filter);
        const entrepreneurships = mongoToObject(res);
        return entrepreneurships;
    }

    async create(newEntrepreneurship) {
        delete newEntrepreneurship.file;
        if (validateNewEntrepreneurship(newEntrepreneurship).result) {
            const filter = { email: newEntrepreneurship.email };
            const count = await Entrepreneurship.count({});
            const existedEntrepreneurship = await this.getBy(filter);
            if (!existedEntrepreneurship.length) {
                newEntrepreneurship = {
                    id: count + 1, ...newEntrepreneurship
                }
                const entrepreneurship = await Entrepreneurship.create(newEntrepreneurship);
                return entrepreneurship;
            } else {
                throw new Error("Duplicated id");
            }
        } else {
            throw new Error("Error validacion");
        }

    }

    async addFile(email, file) {
        const filter = { email: email };
        const existedEntrepreneurship = await this.getBy(filter);
        if (existedEntrepreneurship.length) {
            const update = { "file": file };
            const res = await Entrepreneurship.updateOne(filter, update);
            return res;
        } else {
            throw new Error("Id not found");
        }
    }

    async getAnalytics() {
        const res = await Entrepreneurship.aggregate([{ $unwind: "$challenges" }, { $unwind: "$challenges.citizens" }, { $group: { _id: "$challenges.citizens.analytics", count: { $sum: 1 } } }]);
        return res;
    }

    async addQuestions(email, id, questions) {
        const filter = { email: email, 'challenges.id': parseInt(id) };
        const existedEntrepreneurship = await this.getBy(filter);
        if (existedEntrepreneurship.length) {
            const challenge = existedEntrepreneurship[0].challenges.find(c => c.id === parseInt(id));
            const resEp = await Entrepreneur.findOne({ email: email });
            const entrepreneur = mongoToObject(resEp);
            questions = { ...questions, id: challenge.citizens.length + 1 }
            const update = { "$push": { "challenges.$.citizens": questions } };
            const resEn = await Entrepreneurship.updateOne(filter, update);
            sendMail(entrepreneur[0], questions);
            return resEn;
        } else {
            throw new Error("Id not found");
        }
    }

    async addChallenge(email, challenge) {
        const filter = { email: email };
        const existedEntrepreneurship = await this.getBy(filter);
        if (existedEntrepreneurship.length) {
            challenge = { id: existedEntrepreneurship[0].challenges.length + 1, ...challenge }
            const update = { "$push": { "challenges": challenge } };
            const res = await Entrepreneurship.updateOne(filter, update);
            return res;
        } else {
            throw new Error("Id not found");
        }
    }

    async updateChallenge(email, id, challenge) {
        const filter = { email: email, 'challenges.id': id };
        const existedEntrepreneurship = await this.getBy(filter);
        if (existedEntrepreneurship.length) {
            const update = { "$set": { "challenges.$.description": challenge.description } };
            const res = await Entrepreneurship.updateOne(filter, update);
            return res;
        } else {
            throw new Error("Id not found");
        }
    }

}
