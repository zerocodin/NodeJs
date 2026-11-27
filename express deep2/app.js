const express = require("express");
const path = require('path');

const userRoutes = require("./routes/user.route");
const hostRoutes = require("./routes/host.route");

const rootDir = require('./utils/path.util');

const app = express();

app.use(express.urlencoded())

app.use(userRoutes);
app.use('/host',hostRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "./views/404.html"));
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
