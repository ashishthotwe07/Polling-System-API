// Importing the mongoose library
import mongoose from 'mongoose';

// Creating a mongoose schema for the Option model
const optionSchema = new mongoose.Schema({
  // Text representing the option, required field
  text: {
    type: String,
    required: true,
  },
  // Number of votes for the option, default is 0
  votes: {
    type: Number,
    default: 0,
  },
  // Link to vote for the option, a string field
  link_to_vote: {
    type: String,
  },
});

// Creating the Option model using the schema
const Option = mongoose.model('Option', optionSchema);

// Exporting the Option model
export default Option;
