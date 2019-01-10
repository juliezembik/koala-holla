const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');


// DB CONNECTION
const Pool = pg.Pool;
const pool = new Pool ({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeMillis: 10000
});


// GET
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "inventory";`;
    pool.query(queryText),then((result) => {
        console.log(result);
        res.send(result.rows);
    })

})

// POST
router.post('')

// PUT


// DELETE

module.exports = koalaRouter;