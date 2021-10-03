const express = require("express");
const pool = require("../db");
const formRouter = express.Router();

formRouter.get("/", async (req, res) => {
    console.log('hot reloaded!')
    try {
        const allItems = await pool.query("SELECT * FROM form");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = formRouter;