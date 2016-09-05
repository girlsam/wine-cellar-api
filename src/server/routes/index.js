const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

const { db } = require('../config/db-config.js');
const pg = require('pg');

router.get('/api/wines', function (req, res, next) {
  db.any('SELECT * FROM wines', [true])
    .then(function(wines) {
      res.status(200).json(wines);
    })
    .catch(function(error) {
      next(error);
  });
});

router.get('/api/wines/:id', function (req, res, next) {
  const wineID = parseInt(req.params.id);
  db.any(`SELECT * FROM wines WHERE id = ${wineID}`, [true])
    .then(function(wines) {
      if (wines.length) {
        res.status(200).json(wines);
      } else {
        res.status(404).send({
          status: 'error',
          message: 'Wine not in cellar.'
        });
      }
    })
    .catch(function(error) {
      next(error);
  });
});

router.post('/api/wines', (req, res, next) => {
    const newWine = {
      name: req.body.name,
      region: req.body.region,
      year: req.body.year,
      price: req.body.price,
      notes: req.body.notes,
      rating: req.body.rating
    };
    db.any(`INSERT INTO wines(name, region, year, price, notes, rating) VALUES('${newWine.name}', '${newWine.region}', ${newWine.year}, ${newWine.price}, '${newWine.notes}', ${newWine.rating})`, [true])
    .then(function(wine_cellar) {
      res.status(200).json(newWine);
    })
    .catch(function (error) {
      next(error);
    });
});

router.put('/api/wines/:id', (req, res, next) => {
  const wineID = parseInt(req.params.id);
  let rating = parseInt(req.body.rating);
  db.any(`UPDATE wines SET rating = ${rating} WHERE id = ${wineID}`, [true])
  .then(function(wines) {
    res.status(200).json(wines);
  })
  .catch(function(error) {
    next(error);
  });
});

router.delete('/api/wines/:id', (req, res, next) => {
  const wineID = parseInt(req.params.id);
  db.any(`DELETE FROM wines WHERE id = ${wineID}`, [true])
    .then(function(wines) {
      if (!wines.length) {
        res.status(200).json(wines);
      } else {
        res.status(404).send({
          status: 'error',
          message: 'Wine not in cellar.'
        });
      }
    })
    .catch(function(error) {
      next(error);
  });
});

module.exports = router;
