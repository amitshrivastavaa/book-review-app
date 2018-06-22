import db from '../../config/database';
import dbFunc from '../../config/db-function';
import { prepareSqlFields, mapDataToField } from '../../utils/helpers';

const validBookFields = ['isbn', 'title', 'username'];

const validUserFields = ['username'];

const validEvaluationFields = ['isbn', 'rating', 'review', 'username'];

const addBook = (bookdata) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO books (uid, ${prepareSqlFields(validBookFields)})VALUES(NULL, "${mapDataToField(validBookFields, bookdata.data)}")`, (error, rows, fields) => {
    if (error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

const addEvaluation = (userdata) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO book_evaluation(uid, ${prepareSqlFields(validEvaluationFields)}) VALUES(NULL, "${mapDataToField(validEvaluationFields, userdata.data)}")`, (error, rows, fields) => {
    if (!!error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

const addUser = (user) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO users(uid, ${prepareSqlFields(validUserFields)}) VALUES(NULL, "${mapDataToField(validUserFields, user.data)}")`, (error, rows, fields) => {
    if (!!error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

const getAllBooks = () => new Promise((resolve, reject) => {
  db.query('SELECT * FROM books ORDER BY created desc', (error, rows, fields) => {
    if (!!error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

const getSingleBook = (isbn) => new Promise((resolve, reject) => {
  const query = `SELECT review, rating, title, table2.username FROM books as table1 LEFT JOIN book_evaluation as table2 ON table1.isbn=table2.isbn WHERE table1.isbn=${isbn} ORDER BY table2.created desc`;

  db.query(query, (error, rows, fields) => {
    if (!!error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

const getUserByName = (username) => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM users WHERE username="${username}"`, (error, rows, fields) => {
    if (!!error) {
      dbFunc.connectionRelease;
      reject(error);
    } else {
      dbFunc.connectionRelease;
      resolve(rows);
    }
  });
});

export default {
  addBook,
  addUser,
  addEvaluation,
  getAllBooks,
  getSingleBook,
  getUserByName
};
