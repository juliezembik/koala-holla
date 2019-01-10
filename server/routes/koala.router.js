const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

<<<<<<< HEAD
=======

>>>>>>> 4fe8427283f05198efbea6d72f85bbafa11fffe5
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
<<<<<<< HEAD
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
=======
>>>>>>> 4fe8427283f05198efbea6d72f85bbafa11fffe5

// POST


// PUT


// DELETE

module.exports = koalaRouter;