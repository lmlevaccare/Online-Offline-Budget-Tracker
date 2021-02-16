const router = require("express").Router();
const dbTransaction = require("../models/transaction.js");

// post routes to add transactions to budget tracker
router.post("/api/transaction", ({body}, res) => {
  dbTransaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});