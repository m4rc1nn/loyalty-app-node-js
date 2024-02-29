const express = require("express");
const router = express.Router();

const { db } = require("../../../database/db");

router.get("/categories", async (req, res) => {
    try {
        const categories = await db.Category.findAll();
        return res.status(200).json({
            type: "SUCCESS",
            categories: categories,
        });
    } catch (error) {
        res.json(500).json({
            type: "ERROR",
            message: error.message,
        });
    }
});

module.exports = router;
