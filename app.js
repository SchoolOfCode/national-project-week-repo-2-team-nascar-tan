import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import usersRouter  from './routes/users.js';
import journalRouter from "./routes/journals.js"
// import moodRouter from "./routes/moods.js"
import todoRouter from "./routes/todolist.js"

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.get("/test",function(req,res,next){
//   console.log("Working")
//   next()
// })

app.use('/journals', journalRouter);
app.use('/todos', todoRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;





//STAGING 0.2

