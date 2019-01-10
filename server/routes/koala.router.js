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
    let queryText = `SELECT * FROM "koalas";`;
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`ERROR in GET /koalas ${error}`);
        res.sendStatus(500);
    })
    console.log('In koalas GET');
    
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;