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
import http from 'http';
//import request from 'request';

var request = require('request');

/** AUX FUNCTIONS **/
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

/**ENDPOINTS**/
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

// Gets a list of the most recent 10 Quotes
export function getRecent(req, res) {

  Quote.find({}).limit(10)
    .then(respondWithResult(res))
    .catch(handleError(res));
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

  if (typeof req.body.background_color !== 'undefined' && req.body.background_color){
    Quote.createAsync(req.body)
      .then(respondWithResult(res, 201))
      .catch(handleError(res));
  }
  else {
    var mashapeKey = 'hDNI5fg8wemshbHH6EWyg8xXdBTGp1qv7isjsnjJWy4o3Yxfr2';
    request({
      url: 'https://apicloud-colortag.p.mashape.com/tag-url.json', //URL to hit
      qs: {url: req.body.background_img}, //Query string data
      method: 'GET', //Specify the method
      headers: { //We can define headers too
        'Content-Type': 'application/json',
        'X-Mashape-Key': mashapeKey
      }
    }, function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        var obj = JSON.parse(body);
        //This is the dominant color
        console.log(obj.tags[0]);

        var newQoute = Quote({
          text: req.body.text,
          background_img: req.body.background_img,
          background_color: obj.tags[0].color,
          author_name: req.body.author_name,
          author_photo: req.body.author_photo
        });
        Quote.createAsync(newQoute)
          .then(respondWithResult(res, 201))
          .catch(handleError(res));
      }
    });

  }
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
