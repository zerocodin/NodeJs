const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);

	if (req.url === "/" || req.url === "/home") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Home Page</title></head>");
		res.write("<body><h1>you are in home page now</h1>");
		res.write("<form action='/submit-details' method='POST'>");
		res.write(
			'<input type="text" name="username" placeholder="Enter your username"> <br>',
		);
		res.write('<label for="male">Male:</label>');
		res.write('<input type=radio name="gender" value="male"> Male <br>');
		res.write('<label for="female">Female:</label>');
		res.write('<input type=radio name="gender" value="female"> Female <br>');
		res.write('<input type=submit value="submit"> <br>');
		res.write("/<form>");
		res.write("</body>");
		res.write("</html>");
		res.write("<br>");
		return res.end("home page");
	} else if (req.url === "/products") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>products</title></head>");
		res.write("<body><h1>you are in product page</h1></body>");
		res.write("</html>");

		return res.end("/product page");
	} else if (
		req.url === "/submit-details" &&
		req.method === "POST"
	) {
		const body = [];
		
		req.on('data', chunk =>{
			console.log(chunk);
			body.push(chunk);
		})

		req.on('end', ()=>{
			const fullBody = Buffer.concat(body).toString();

			console.log(fullBody);

			// const params = new URLSearchParams(fullBody);
			// const reqBody = {};
			// for(const [key, val] of params.entries()){
			// 	reqBody[key] = val;
			// }

			const reqBody = Object.fromEntries(new URLSearchParams(fullBody));

			console.log(reqBody);
		fs.writeFileSync('user.txt', JSON.stringify(reqBody))

		})

		res.statusCode = 200;

		return res.setHeader('Location', '/');
	} else {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>default page</title></head>");
		res.write("<body><h1>/default page</h1></body>");
		res.write("</html>");

		return res.end("done");
	}
});

module.exports = app;
