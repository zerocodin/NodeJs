const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/about',(req,res, next)=>{
    console.log(`${req.method} ${req.url}`);
    console.log('This is the first middleware');
    next(); // crash server
    res.send("<p>Response from the first middleware</p>");
})

app.get('/',(req,res, next)=>{
    console.log('This is the second middleware');
    res.send("<p>Response from the second middleware</p>");
})

app.get('/details', (req,res,next)=>{
    console.log("Hello world");
    res.send(`
        <h1>Details Page</h1>
        <form action="/submit-details" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
        `)
})

app.use(bodyParser.urlencoded());

app.post('/submit-details', (req,res,next)=>{
    console.log('Handling submit-details for GET', req.url, req.method, req.body)
    res.send(`<h1>Details submitted successfully</h1>`)
})

app.post('contact-us', (req,res,next)=>{
    console.log('Handling contact-us for POST', req.url)

    res.send(`<h1>We will contact you shortly</h1>`)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});