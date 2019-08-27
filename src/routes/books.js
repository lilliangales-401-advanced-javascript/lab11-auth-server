'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware');

/**
 * This is a route to get books
 * @route GET /books
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 -  count and book results
 */
router.get('/books', auth, handleGetAll);
/**
 * This is a route to get one book
 * @route GET /books/:id
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 -  book title
 */
router.get('/books/:id', auth, handleGetOne);

// Route Handlers
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
