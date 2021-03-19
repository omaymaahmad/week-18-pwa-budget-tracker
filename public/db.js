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

// send them to /api/transaction/bulk 
router.post("/api/transaction/bulk", ({body}, res) => {
    Transaction.insertMany(body).then(dbTransaction);
})
.catch(err => {
    res.status(404).json(err);
});



// when the app comes online - we need to check the database, get each entry in the db..
// then send them all to the /api/transaction/bulk and point

