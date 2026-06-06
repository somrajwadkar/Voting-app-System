const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/data', (req, res) => {
    // Simulate fetching data from a database or another source
    const data = {
        message: 'Hello from the API!',
        timestamp: new Date()
    };
    res.json(data);
});
 //git add .
// git commit -m "Describe your changes"
// git push origin main

