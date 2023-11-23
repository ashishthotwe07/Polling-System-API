import mongoose from 'mongoose';
import Question from '../model/questions.model.js';
import Option from '../model/options.model.js';

export default class QuestionsController {
  async createQuestions(req, res) {
    try {
      const { title } = req.body;

      const question = new Question({
        title: title,
      });

      const savedQuestion = await question.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async addOptions(req, res) {
    try {
      const questionId = req.params.id;

      if (!mongoose.isValidObjectId(questionId)) {
        return res.status(400).json({ error: 'Invalid question ID' });
      }

      const { text } = req.body;

      const option = new Option({
        text: text,
        votes: 0,
        link_to_vote: `http://localhost:8000/options/${questionId}/add_vote`,
      });

      const savedOption = await option.save();

      // Find the question by ID and push the new option
      const updatedQuestion = await Question.findByIdAndUpdate(
        questionId,
        { $push: { options: savedOption._id } },
        { new: true } // Return the updated question
      ).populate('options');

      res.status(201).json({ question: updatedQuestion, option: savedOption });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async viewQuestions(req, res) {
    try {
      const questions = await Question.find().populate('options');
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async deleteQuestions(req, res) {
    try {
      const questionId = req.params.id;

      await Question.findByIdAndDelete(questionId);
      res.status(204).send("deleted question");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
