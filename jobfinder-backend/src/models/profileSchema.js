import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  skills: [String],
  about: {
    location: String,
    work: String,
    from: String
  },
  elsewhere: [String]
});

const User  = mongoose.model('User', userSchema);

export default User;
