import mongoose from 'mongoose';
import Option from '../model/options.model.js';

export default class OptionsController {
  // Delete an option by ID
  async deleteOption(req, res) {
    try {
      const optionId = req.params.id;
  
      if (!mongoose.isValidObjectId(optionId)) {
        return res.status(400).json({ error: 'Invalid option ID' });
      }
  
      const deletedOption = await Option.findByIdAndDelete(optionId);
  
      if (!deletedOption) {
        return res.status(404).json({ error: 'Option not found' });
      }
  
      res.status(204).send("Option deleted");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  // Add a vote to an option
  async addVote(req, res) {
    try {
      const optionId = req.params.id;
  
      if (!mongoose.isValidObjectId(optionId)) {
        return res.status(400).json({ error: 'Invalid option ID' });
      }
  
      const option = await Option.findById(optionId);
  
      if (!option) {
        return res.status(404).json({ error: 'Option not found' });
      }
  
      const updatedOption = await Option.findByIdAndUpdate(
        optionId,
        { $inc: { votes: 1 } },
        { new: true }
      );
  
      res.status(200).json(updatedOption);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}
