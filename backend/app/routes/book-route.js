import bookService from '../services/book-service';

const addBook = (req, res) => {
  const userData = req.body;

  bookService.addBook(userData).then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
};

const addEvaluation = (req, res) => {
  const userData = req.body;

  bookService.addEvaluation(userData).then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
};

const addUser = (req, res) => {
  const userData = req.body;

  bookService.addUser(userData).then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
};

const getAllBooks = (req, res) => {
  bookService.getAllBooks().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
};

const getSingleBook = (req, res) => {
  const { params: { isbn } } = req;

  bookService.getSingleBook(isbn).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
};

const getUserByName = (req, res) => {
  const { params: { username } } = req;

  bookService.getUserByName(username).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
};

const bookRoutes = (router) => {
  router.route('/api/books')
    .get(getAllBooks);

  router.route('/api/book/:isbn')
    .get(getSingleBook)
    .post(addEvaluation);

  router.route('/api/addbook')
    .post(addBook);

  router.route('/api/user/:username')
    .get(getUserByName);

  router.route('/api/adduser')
    .post(addUser);
};

export default bookRoutes;
