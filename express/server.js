const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('Hello, this is an Express server!');
})

app.post('/user', (req, res) => {
    res.send('User created successfully!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})