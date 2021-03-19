// this file is all about setitng up indexedDb 
const router = require("express").Router();
const Transaction = require("../models/transaction");

// get all entries
router.get("/api/transactoin", (req, res) => {
    Transaction.find({}).then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

