// service/controller to interact with model.
import bookModel from '../models/book-model';

const addBook = (userData) => new Promise((resolve, reject) => {
  bookModel.addBook(userData).then((data) => {
    resolve({ code: 'INSERT_SUCCESS' });
  }).catch((err) => {
    if (err.code) { reject({ code: err.code }); }
    reject(err);
  });
});

const addUser = (userData) => new Promise((resolve, reject) => {
  bookModel.addUser(userData).then((data) => {
    resolve({ code: 'INSERT_SUCCESS' });
  }).catch((err) => {
    if (err.code) { reject({ code: err.code }); }
    reject(err);
  });
});

const addEvaluation = (userData) => new Promise((resolve, reject) => {
  bookModel.addEvaluation(userData).then((data) => {
    resolve({ code: 'INSERT_SUCCESS' });
  }).catch((err) => {
    if (err.code) { reject({ code: err.code }); }
    reject(err);
  });
});


const getAllBooks = () => new Promise((resolve, reject) => {
  bookModel.getAllBooks().then((data) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  });
});

const getSingleBook = (isbn) => new Promise((resolve, reject) => {
  bookModel.getSingleBook(isbn).then((data) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  });
});

const getUserByName = (username) => new Promise((resolve, reject) => {
  bookModel.getUserByName(username).then((data) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  });
});

export default {
  addBook,
  addEvaluation,
  addUser,
  getAllBooks,
  getSingleBook,
  getUserByName
};
