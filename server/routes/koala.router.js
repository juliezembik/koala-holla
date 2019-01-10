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
koalaRouter.get('/', (req, res) => {
    let queryText = `SELECT * FROM "inventory";`;
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
koalaRouter.post('/', (req, res) => {
    console.log('in /koalas POST', req.body);
    const koalaToAdd = req.body;
    const queryText = `INSERT INTO "inventory"("name", "gender", "age", "ready_to_transfer", "notes")
                       VALUES($1, $2, $3, $4, $5);`;
    pool.query(queryText, [koalaToAdd.name, koalaToAdd.gender, koalaToAdd.age, koalaToAdd.ready_to_transfer, koalaToAdd.notes])
    .then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`ERROR in POST /koalas, ${error}`);
        res.sendStatus(500);
    })
});

// PUT


// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log('PARAMS', req,params);
    const queryText = `DELETE FROM "inventory" WHERE "id" = $1;`    
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`ERROR in DELETE /koalas ${error}`);
        res.sendStatus(500);        
    })
});


module.exports = koalaRouter;