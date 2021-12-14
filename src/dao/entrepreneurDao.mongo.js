
import { Entrepreneur } from '../models/entrepreneur.mongo.js';
import { mongoToObject } from '../utils/index.js'

export default class EntrepreneurDaoMongo {

    constructor() {

    }

    async getBy(filter) {
        const res = await Entrepreneur.findOne(filter);
        const items = mongoToObject(res);
        return items;
    }


    async create(newEntrepreneur) {
        const existedEntrepreneur = await this.getBy({ email: newEntrepreneur.email });
        if (!existedEntrepreneur.length) {
            const entrepreneur = await Entrepreneur.create(newEntrepreneur);
            return entrepreneur;
        } else {
            throw new Error("Duplicated id");
        }

    }

    async getEntrepreneur(email, password) {
        const filter = { email: email, password: password };
        const existedEntrepreneur = await this.getBy(filter);
        if (existedEntrepreneur.length) {
            delete existedEntrepreneur[0].password;
            return existedEntrepreneur;
        } else {
            throw new Error("User and passwoed don't match");
        }
    }

    async updateById(id, item) {
        const filter = { id: id };
        const existedEntrepreneur = await this.getBy(filter);
        if (existedEntrepreneur.length) {
            if (validateUpdatedItem(item).result) {
                const oldItem = await this.getById(id);
                if (!oldItem) throw new Error("No data");
                const filter = { id: id };
                const update = { ...oldItem, ...item };
                const res = await Item.findOneAndUpdate(filter, update, { returnOriginal: false });
                return res;
            } else {
                throw new Error("Validate item error");
            }
        } else {
            throw new Error("Id not found");
        }
    }


}
