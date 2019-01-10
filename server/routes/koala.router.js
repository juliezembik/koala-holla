const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool ({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeMillis: 10000
});

// DB CONNECTION


// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;