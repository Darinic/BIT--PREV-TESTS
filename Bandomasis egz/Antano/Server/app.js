import express from 'express';
import createError from 'http-errors';
import path from 'path';
import logger from 'morgan';
import {dirname} from 'path'
import { fileURLToPath } from 'url'

import {router as appointmentsAPIRouter} from './routes/storiesApi.js';
import {router as authenticateAPIRouter} from './routes/authenticateAPI.js';

export const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();

//CORS "fix"
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), { index: false}));


app.use('/api/authenticate', authenticateAPIRouter);
app.use('/api', appointmentsAPIRouter);


// catch 404 and forward it to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end();
});

export default app;
