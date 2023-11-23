// Importing the mongoose library
import mongoose from 'mongoose';

// Creating a mongoose schema for the Question model
const questionSchema = new mongoose.Schema({
  // Title of the question, a required string field
  title: {
    type: String,
    required: true,
  },
  // Array of option IDs associated with the question
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option', // Referencing the 'Option' model
  }],
});

// Creating the Question model using the schema
const Question = mongoose.model('Question', questionSchema);

// Exporting the Question model
export default Question;
