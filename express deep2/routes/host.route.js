const express = require('express');
const path = require('path');

const rootDir = require('../utils/path.util');

const router = express.Router();

router.get("/add-home", (req, res, next) => {
	res.sendFile(path.join(rootDir,"../", "views", "addHome.html"));
});

router.post("/add-home", (req, res, next) => {
    console.log(req.body);

	res.sendFile(path.join(rootDir, "../","views","homeAdded.html"));
});

module.exports = router;