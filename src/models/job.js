import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    user: { username: String },
    jobs: [{ id: String }],
});

export const Job = mongoose.model('Job', jobSchema);