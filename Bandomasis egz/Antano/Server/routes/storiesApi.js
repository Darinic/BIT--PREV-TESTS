import express from 'express';
import {isStoryRequestValid} from "../validators/Validators.js";
import jwt from 'jsonwebtoken';
import {
  addFunder,
  addStory,
  confirmStory,
  deleteStory, getFunders,
  getStories,
  updateAmount
} from "../repository/DatabaseRepository.js";
import fileUpload from "express-fileupload";
import { v4 as uuidv4 } from 'uuid';

import {__dirname} from "../app.js";

export const router = express.Router();

/*//CORS "fix"
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET, OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});*/

router.use(fileUpload());

//UNPROTECTED route

router.post('/stories', isStoryRequestValid,  photoHandler, (req, res, next) => {
  addStory({...req.body, photo: req.photoPath})
    .then(() => res.status(200).end())
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });
});

router.post('/stories/funders/:id',  (req, res, next) => {
  addFunder({...req.body, storyId: req.params.id})
    .then(() => res.status(200).end())
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });
});

router.get('/stories/:confirmed',  async (req, res, next) => {
  try {
    const stories = await getStories(true);
    const storiesWithFunders = await Promise.all(
      stories.map(async (story) => {
        const funders = await getFunders(story.id);
        story.funders = funders;
        return story
      })
    );
    res.status(200).json(storiesWithFunders);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }


/*  getStories(true)
    .then()
    .then(stories => res.status(200).json(stories))
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });*/
})


// PROTECTED ROUTES

// commented out since middleware is executed in case of preflights??? investigate
//router.use(verifyJWT);

/* GET appointments listing. */
router.get('/stories', verifyJWT,  (req, res, next) => {
  getStories(false)
    .then(appointments => res.status(200).json(appointments))
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });
})

router.delete('/stories/:id', verifyJWT, (req, res, next) => {
  deleteStory(req.params.id)
    .then(() => res.status(200).end())
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });
});

router.patch('/stories/:id', verifyJWT, (req, res, next) => {
  confirmStory(req.params.id)
    .then(() =>
      res.status(200).end())
    .catch(error => {
      console.log(error);
      res.status(400).end();
    });
});

function verifyJWT(req, res, next) {
  try {
    const token = (req.header("Authorization") || '').split(' ')[1] || '';
    const claims = jwt.verify(token, process.env.SECRET);
    req.userId = claims.userId;
    next();
  } catch(err) {
    console.log(err);
    res.sendStatus(401);
  }
}

function photoHandler(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400);
    res.statusText = 'Photo was not uploaded';
    return res.end();
  }

  const photoFile = req.files.photo;
  const fileName = uuidv4() + "." + photoFile.name.split('.').pop()
  const uploadPath = __dirname + '/public/images/' + fileName;

  photoFile.mv(uploadPath, (err) => {
    if (err) {
      res.status(500)
      return res.end();
    }
    req.photoPath = '/images/' + fileName;
    next();
  });
}

