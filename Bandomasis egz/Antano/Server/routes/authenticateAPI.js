import express from 'express';
import {addUser, getUser} from "../repository/DatabaseRepository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const router = express.Router();

/*//CORS "fix"
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});*/

router.get('/', verifyBasicAuthentication, (req, res) => {
  const jwtToken = jwt.sign({userId: req.userId}, process.env.SECRET, { expiresIn: '24h' });
  res.status(200).json({jwtToken: jwtToken});
});

router.post('/users', hashPassword, (req, res) => {
  addUser({email: req.body.email, password: req.body.password})
    .then(() => res.status(200).end())
    .catch(error => {
      console.log(error);
      res.statusMessage = errorCodesResolver(error);
      res.status(400).end();
    });
});

function errorCodesResolver(error) {
  if (error?.code === 'ER_DUP_ENTRY') return 'User with such email exists';
  return ''; //do not provide internal unknown error info  to the client
}

async function hashPassword(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end();
  }
}

async function verifyBasicAuthentication(req, res, next) {
  const credentials = (req.header("Authorization") || '').split(' ')[1] || '';
  //TODO: improve to handle case when ':' is used in credentials
  const [email, password] = Buffer.from(credentials, 'base64').toString().split(':');
  let userData;
  try {
    userData = await getUser(email);
  } catch (error) {
    console.log(error);
    res.set('WWW-Authenticate', 'Basic realm="Bit Demo"');
    if (error.cause === 'NOT_FOUND') {
      res.statusMessage = "User dos not exists";
      res.status(401);
    } else {
      res.status(500);
    }
    res.end();
    return;
  }
  const match = await bcrypt.compare(password, userData?.password);
  if (match) {
    req.userId = userData.email;
    next();
    return;
  }
  res.set('WWW-Authenticate', 'Basic realm="Bit Demo"');
  res.statusMessage = "Incorrect credentials";
  res.status(401).end();
}
