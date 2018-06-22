import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getUserName = () => cookies.get('username');

const setUserName = (username) => cookies.set('username', username);

const separateBooks = (books, user) => {
  const currentUserBooks = books.filter(({ username }) => username === user);
  const otherUsersBooks = books.filter(({ username }) => username !== user);
  return { currentUserBooks, otherUsersBooks}
};

export { getUserName, setUserName, separateBooks };
