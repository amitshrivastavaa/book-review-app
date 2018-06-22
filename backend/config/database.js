import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DATABASE_HOST || 'localhost',
  user: 'root',
  password: '123456',
  database: 'book_review_db'
});

export default pool;
