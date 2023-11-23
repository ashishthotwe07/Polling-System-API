import mongoose from 'mongoose';


const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  link_to_vote: {
    type: String,
  },
});

const Option = mongoose.model('Option', optionSchema);

export default Option;
