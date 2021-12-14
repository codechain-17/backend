import mongoose from 'mongoose';

const user = new mongoose.Schema({
  username: String,
  name: String,
  lastname: String,
  github: String,
  linkedin: String,
  portfolio: String,
  knowledgeareas: String,
  gender: String,
  password: String,
  avatar: {data: Buffer, contentType: String}
});

export const User = mongoose.model("User", user);