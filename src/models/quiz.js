import mongoose from 'mongoose';

const alternativeSchema = mongoose.Schema({
    id: Number,
    text: String,
    isCorrect: Boolean
});

const questionSchema = mongoose.Schema({
    id: Number,
    alternatives: [alternativeSchema],
    question: String,
});

const quizSchema = new mongoose.Schema({
    category: String,
    questions: [questionSchema],
});

export const Quiz = mongoose.model('Quiz', quizSchema);