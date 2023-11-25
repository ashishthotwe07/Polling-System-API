import express from 'express';
import bodyParser from 'body-parser';
import QuestionsRouter from './routes/questions.routes.js'; 
import OptionsRouter from './routes/options.routes.js'; 
import { db } from './config/mongoose.js';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

app.use(bodyParser.json());

// Routes related to questions
app.use('/questions', QuestionsRouter);

// Routes related to options
app.use('/options', OptionsRouter);

app.listen(8000, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log('Server is running at port 8000');
  }
});
