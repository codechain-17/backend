import mongoose from 'mongoose';

const questionsShema = {
    id: Number,
    name: String,
    email: String,
    analytics: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    question6: String,
}

const challengeSchema = new mongoose.Schema({
    id: Number,
    type: String,
    description: String,
    shortDescription: String,
    citizens: [questionsShema]
})

const entrepreneurshipSchema = new mongoose.Schema({
    id: Number,
    email: {
        type: String,
        unique: true
    },
    representativeName: String,
    representativeEmail: {
        type: String,
        unique: true
    },
    name: String,
    description: String,
    file: String,
    confirmWorkshop: Boolean,
    video: String,
    challenges: [challengeSchema]
})

export const Entrepreneurship = mongoose.model('Entrepreneurship', entrepreneurshipSchema);