const http = require("http");

const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logicalError = require("./logic");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

    // testingSyntax();
    // runtime();
    logicalError();
});

const port = 3000;

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
