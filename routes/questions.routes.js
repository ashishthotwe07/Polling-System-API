// routes for Questions controller

import express from 'express';
import QuestionsController from '../controller/questions.controller.js';

const router = express.Router();
const questionsController = new QuestionsController();

// Route to create a new question 
router.post('/create', questionsController.createQuestions);

// Route to add options to a question by question ID
router.post('/:id/options/create', questionsController.addOptions);

// Route to delete a question by question ID 
router.delete('/:id/delete', questionsController.deleteQuestions);

// Route to view a question by question ID 
router.get('/:id', questionsController.viewQuestions);

export default router;
