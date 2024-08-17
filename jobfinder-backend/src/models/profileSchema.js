import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
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

const User  = mongoose.model('Profile', profileSchema);

export default User;
