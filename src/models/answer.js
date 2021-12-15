import mongoose from 'mongoose';

const alternativeSchema = mongoose.Schema({
    id: Number,
    answer: Boolean,
})

const questionSchema = mongoose.Schema({
    id: Number,
    alternatives: [alternativeSchema],
})

const quizSchema = new mongoose.Schema({
    id: Number,
    category: String,
    date: Date,
    score: Number,
    questions: [Number],
});

const answerSchema = mongoose.Schema({
    userId: String,
    quizes: [quizSchema],
});

export const Answer = mongoose.model('Answer', answerSchema);
