import mongoose from 'mongoose';

const entrepreneurSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
})

export const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema);