CREATE DATABASE IF NOT EXISTS book_review_db;
use book_review_db;

CREATE TABLE `books` (
  `isbn` varchar(13) NOT NULL,
  `username` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  `title` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `book_evaluation` (
  `isbn` varchar(13) NOT NULL,
  `review` text NOT NULL,
  `rating` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `books`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `isbn` (`isbn`);

ALTER TABLE `book_evaluation`
  ADD PRIMARY KEY (`uid`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

ALTER TABLE `books`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `book_evaluation`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;
