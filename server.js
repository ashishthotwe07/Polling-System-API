import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/options.routes.js';
import Optionsrouter from './routes/options.routes.js';
import Questionsrouter from './routes/questions.routes.js';
import { db } from './config/mongoose.js';

const app = express();

app.use(bodyParser.json());

// routes related to question 
app.use('/questions' ,Questionsrouter);
app.use('/options' ,Optionsrouter);

app.listen(8000 , (err)=>{
    console.log("server is running at port 8000");
})