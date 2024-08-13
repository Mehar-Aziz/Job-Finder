import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});

const Service = mongoose.model('Service', ServiceSchema);

export default Service;
