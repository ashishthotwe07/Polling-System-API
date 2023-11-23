import express from 'express';
import OptionsController from '../controller/options.controller.js';
const router = express.Router();

const optionsController = new OptionsController();

router.get('/:id/delete' , optionsController.deleteOption);
router.post('/:id/add_vote', optionsController.addVote);


export default router;