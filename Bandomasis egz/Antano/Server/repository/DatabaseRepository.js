import {getDb} from "../config/DBConfig.js";

const INSERT_SQL = 'INSERT INTO stories (story, photo, targetAmount) VALUES (:story, :photo, :targetAmount)';
const GET_ALL_SQL = 'SELECT * FROM stories';
const GET_CONFIRMED_SQL = 'SELECT * FROM stories WHERE confirmed=true';
const CONFIRM_SQL = 'UPDATE stories SET confirmed = true WHERE id = :id';
const UPDATE_AMOUNT_SQL = 'UPDATE stories SET currentAmount = currentAmount + :amount WHERE id = :id';
const DELETE_SQL = 'DELETE FROM stories WHERE id = :id';

const INSERT_USER_SQL = 'INSERT INTO users (email, password) VALUES (:email, :password)';
const GET_USER_SQL = 'SELECT * FROM users WHERE email = :email';

const INSERT_FUNDER_SQL = 'INSERT INTO funders (name, amount, story_id) VALUES (:name, :amount, :storyId)';
const GET_FUNDERS_SQL = 'SELECT * FROM funders WHERE story_id = :storyId' ;


export async function addStory(story) {
  const connection = await getDb();
  await connection.execute(INSERT_SQL, story);
}

export async function getStories(confirmed) {
  const connection = await getDb();
  const [rows] =await connection.query(confirmed ? GET_CONFIRMED_SQL : GET_ALL_SQL);
  return rows;
}

export async function getFunders(storyId) {
  const connection = await getDb();
  const [rows] =await connection.query(GET_FUNDERS_SQL, {storyId: storyId});
  return rows;
}

export async function updateAmount(amount) {
  const connection = await getDb();
  await connection.execute(UPDATE_AMOUNT_SQL, amount);
}

export async function confirmStory(id) {
  const connection = await getDb();
  await connection.execute(CONFIRM_SQL, {id: id});
}

export async function deleteStory(id) {
  const connection = await getDb();
  await connection.execute(DELETE_SQL, {id: id});
}

export async function addFunder(funder) {
  const connection = await getDb();
  await connection.beginTransaction();
  await connection.execute(INSERT_FUNDER_SQL, funder);
  await connection.execute(UPDATE_AMOUNT_SQL, {amount: funder.amount, id: funder.storyId});
  await connection.commit();
}

export async function addUser(credentials) {
  const connection = await getDb();
  await connection.execute(INSERT_USER_SQL, credentials);
}

export async function getUser(email) {
  const connection = await getDb();
  const [rows] = await connection.execute(GET_USER_SQL, {email: email});
  if (rows.length !== 1) throw new Error("Error finding user with email: " + email, { cause: 'NOT_FOUND' });
  return rows[0];
}
