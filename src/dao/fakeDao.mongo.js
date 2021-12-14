import { Entrepreneur } from '../models/entrepreneur.mongo.js';
import { Entrepreneurship } from '../models/entrepreneurship.mongo.js';

import faker from 'faker';
import { fake } from 'faker/locale/zh_TW';
faker.locale = 'es';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export default class FakeDao {
    constructor() {
        this.entrepreneur = new Entrepreneur();
        this.entrepreneurship = new Entrepreneurship();
        this.types = ['transformacion', 'comunidad', 'desigualdad', 'climatico', 'tejido'];
        this.types = ['fb', 'igm', 'otros'];
    }

    generate() {
        Array.from(new Array(Number(10)), async (v, k) => {
            const email = faker.email();
            const entrepreneur = {
                name: faker.name.firstName(),
                email: email,
                password: faker.internet.password(),
            }
            const entrepreneurId = await this.entrepreneur.create(entrepreneur);

            const entrepreneurship = {
                representativeName = faker.name.firstName(),
                representativeEmail = faker.internet.email(),
                name = faker.company.companyName(),
                email = email,
                description = faker.commerce.productDescription(),
                confirmWorkshop = true,
            }
            const entrepreneurshipId = await this.entrepreneurship.create(entrepreneurship);
            const challenge = {
                type= this.types[randomIntFromInterval(0, 4)],
                description = faker.commerce.productDescription(),
                shortDescription = faker.commerce.productDescription(),
            }
            const challengeId = await this.entrepreneurship.createChallenge(email, challenge);
            const questions = {
                name: faker.name.firstName(),
                email: representativeEmail = faker.internet.email(),
                analytics: this.types[randomIntFromInterval(0, 2)],
                question1: fake.lorem.sentence(),
                question2: fake.lorem.sentence(),
                question3: fake.lorem.sentence(),
                question4: fake.lorem.sentence(),
                question5: fake.lorem.sentence(),
                question6: fake.lorem.sentence(),
            }
            const questionsId = await this.entrepreneurship.createQuestions(email, 1, questions);
        });
    }
}