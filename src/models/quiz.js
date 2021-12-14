import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    id: Number,
    question: String,
    detail: String,
});

const quizSchema = new mongoose.Schema({
    category: String,
    questions: [questionSchema],
});

export const Quiz = mongoose.model('Quiz', quizSchema);