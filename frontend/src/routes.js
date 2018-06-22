import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Home from './components/home';
import Books from './components/books';
import Book from './components/book';
import AddBook from './components/add-book';
import Header from './components/header';

export default (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/books' component={Books} />
      <Route path='/add-book' component={AddBook}/>
      <Route path='/book/:id' component={Book}/>
      <Redirect to='/' />
    </Switch>
  </div>
);
