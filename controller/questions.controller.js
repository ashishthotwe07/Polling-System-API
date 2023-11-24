import mongoose from 'mongoose';
import Question from '../model/questions.model.js';
import Option from '../model/options.model.js';

export default class QuestionsController {
  // Create a new question
  async createQuestions(req, res) {
    try {
      const { title } = req.body;

      if (!title) {
        return res.status(400).json({ error: ' Questions Title is required ' });
      }

      const question = new Question({
        title: title,
      });

      const savedQuestion = await question.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Add options to a question
  async addOptions(req, res) {
    try {
      const questionId = req.params.id;

      if (!mongoose.isValidObjectId(questionId)) {
        return res.status(400).json({ error: 'Invalid question ID' });
      }

      const { text } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'Option text is required' });
      }

      // Create a new option
      const option = new Option({
        text: text,
        votes: 0,
        link_to_vote: `http://localhost:8000/options/${questionId}/add_vote`,
      });

      // Save the new option
      const savedOption = await option.save();

      // Find the question by ID and push the new option
      const updatedQuestion = await Question.findByIdAndUpdate(
        questionId,
        { $push: { options: savedOption._id } },
        { new: true } // Return the updated question
      ).populate('options');

      // Return the updated question and the saved option
      res.status(201).json({ question: updatedQuestion, option: savedOption });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // View options for a specific question
  async viewQuestions(req, res) {
    try {
      const questionId = req.params.id;

      // Check if the question ID is valid
      if (!mongoose.isValidObjectId(questionId)) {
        return res.status(400).json({ error: 'Invalid question ID' });
      }

      // Find the question by ID and populate the 'options' field
      const question = await Question.findById(questionId).populate('options');

      // Check if the question was not found
      if (!question) {
        return res.status(404).json({ error: 'Question not found.' });
      }

      // Return only the options for the specific question
      res.status(200).json({ question: { _id: question._id, title: question.title }, options: question.options });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Delete a question
  async deleteQuestions(req, res) {
    try {
      const questionId = req.params.id;

      // Check if the question ID is valid
      if (!mongoose.isValidObjectId(questionId)) {
        return res.status(400).json({ error: 'Invalid question ID' });
      }

      // Delete the question by ID
      const deletedQuestion = await Question.findByIdAndDelete(questionId);

      // Check if the question was not found
      if (!deletedQuestion) {
        return res.status(404).json({ error: 'Question not found.' });
      }

      res.status(204).send("Deleted question");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
