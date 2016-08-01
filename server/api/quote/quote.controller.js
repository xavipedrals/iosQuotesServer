/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/quotes              ->  index
 * POST    /api/quotes              ->  create
 * GET     /api/quotes/:id          ->  show
 * PUT     /api/quotes/:id          ->  update
 * DELETE  /api/quotes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Quote from './quote.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Quotes
export function index(req, res) {
  // Quote.findAsync()
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));

    Quote.find(function (err, quotes) {
      if(err) { return handleError(res, err); }
      // console.log(quotes);
      var returnQuote = null;
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      console.log(randomNumber);
      for(var index in quotes){
        // console.log(quote + quotes[index]);
        if (index == randomNumber) returnQuote = quotes[index];
      }
      return res.status(200).json(returnQuote);
  });

}

// Gets a list of Quotes
export function getAll(req, res) {

  Quote.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));

  // Quote.find(function (err, quotes) {
  //   return res.status(200).json(quotes);
  // });

}

// Gets a single Quote from the DB
export function show(req, res) {
  Quote.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Quote in the DB
export function create(req, res) {
  Quote.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Quote in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Quote.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Quote from the DB
export function destroy(req, res) {
  Quote.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
