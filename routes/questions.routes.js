// routes for Questions controller

import express from 'express';
import QuestionsController from '../controller/questions.controller.js';

const router = express.Router();
const questionsController = new QuestionsController();

router.post('/create' , questionsController.createQuestions);
router.post('/:id/options/create' , questionsController.addOptions);
router.get('/:id/delete' , questionsController.deleteQuestions);
router.get('/:id/' , questionsController.viewQuestions);


export default router;