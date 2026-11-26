const  sumRequest = require('./sum');

const requestHandler = (req, res) => {
	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Welcome to the Calculator</h1>
                <a href="/calculator">Go To Calculator</a>
            </body>
            </html>
        `);

		return res.end();
	} else if (req.url === "/calculator") {
		res.setHeader("Content-Type", "text/html");
		res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Here is Calculator</h1>
                <form action="/calculate-result" method="POST">
                <input type="text" placeholder="Enter first number" name="num1">
                <input type="text" placeholder="Enter second number" name="num2">
                <input type="submit" value="Sum">
                </form>
            </body>
            </html>
        `);

		return res.end();
	} else if (req.url === "/calculate-result" && req.method === "POST") {
        return sumRequest(req, res);
    }

	res.setHeader("Content-Type", "text/html");
	res.write(`
            <html>
            <head><title>Practise Set</title></head>
            <body>
                <h1>404 Page doesn't exists</h1>
                <a href="/">Go To Home</a>
            </body>
            </html>
        `);

	return res.end();
};

module.exports = requestHandler;
