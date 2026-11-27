const sumRequest = (req, res)=>{

    const body = []
    req.on('data', (chunk)=> body.push(chunk))

    let sum;

    req.on('end', ()=>{
        const data = Buffer.concat(body).toString();

        const params = new URLSearchParams(data);
        const num1 = parseInt(params.get('num1'));
        const num2 = parseInt(params.get('num2'));

        sum = num1 + num2;
    })

    res.setHeader("Content-Type", "text/html");
		res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Your Sum is : ${sum}</h1>
            </body>
            </html>
        `);

		return res.end();
}

module.exports = sumRequest;