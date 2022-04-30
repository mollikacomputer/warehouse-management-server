const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Connected with my server assignment 11 test')
});
app.listen(port, ()=>{
    console.log('Listening to port', port);
})