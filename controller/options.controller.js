import mongoose from 'mongoose';
import Option from '../model/options.model.js';

export default class OptionsController {
  // Delete an option by ID
  async deleteOption(req, res) {
    try {
      const optionId = req.params.id;

      // Check if the optionId is a valid ObjectId
      if (!mongoose.isValidObjectId(optionId)) {
        return res.status(400).json({ error: 'Invalid option ID' });
      }

      // Delete the option by ID
      const deletedOption = await Option.findByIdAndDelete(optionId);

      // Check if the option was found and deleted
      if (!deletedOption) {
        return res.status(404).json({ error: 'Option not found' });
      }

      res.status(204).send("Option deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // Add a vote to an option
  async addVote(req, res) {
    try {
      const optionId = req.params.id;

      // Check if the optionId is a valid ObjectId
      if (!mongoose.isValidObjectId(optionId)) {
        return res.status(400).json({ error: 'Invalid option ID' });
      }

      // Find the option by ID
      const option = await Option.findById(optionId);

      // Check if the option exists
      if (!option) {
        return res.status(404).json({ error: 'Option not found' });
      }

      // Increment the votes field and return the updated option
      const updatedOption = await Option.findByIdAndUpdate(
        optionId,
        { $inc: { votes: 1 } },
        { new: true } // Return the updated option
      );

      res.status(200).json(updatedOption);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
