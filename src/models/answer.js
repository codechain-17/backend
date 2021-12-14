import mongoose from 'mongoose';
const questionSchema = mongoose.Schema({
    id: Number,
    answer: Boolean,
})

const quizSchema = new mongoose.Schema({
    id: Number,
    alternatives: [questionSchema],
});

const answerSchema = mongoose.Schema({
    userId: Number,
    quizes: [quizSchema],
});

export const Answer = mongoose.model('Answer', answerSchema);