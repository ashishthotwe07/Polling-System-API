// Routes for Options controller

import express from 'express';
import OptionsController from '../controller/options.controller.js';

const router = express.Router();
const optionsController = new OptionsController();

// Route to delete an option by option ID 
router.delete('/:id/delete', optionsController.deleteOption);

// Route to add a vote to an option by option ID 
router.post('/:id/add_vote', optionsController.addVote);

export default router;
