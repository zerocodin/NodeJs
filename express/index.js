const express = require('express');

const app = express();


app.use('/about',(req,res, next)=>{
    console.log(`${req.method} ${req.url}`);
    console.log('This is the first middleware');
    next(); // crash server
    res.send("<p>Response from the first middleware</p>");
})

app.use('/',(req,res, next)=>{
    console.log('This is the second middleware');
    res.send("<p>Response from the second middleware</p>");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});