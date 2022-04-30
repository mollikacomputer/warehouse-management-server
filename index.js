const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const products = [
    {id:1, name: "Oil-5 liters can", price: 850, picture: "https://ibb.co/qgpy6f7"},
    {id:2, name: "rice", price: 950, picture: "https://ibb.co/qgpy6f7"},
    {id:3, name: "biscuites liters can", price: 550, picture: "https://ibb.co/qgpy6f7"},
    {id:4, name: "Oil-4 liters can", price: 650, picture: "https://ibb.co/qgpy6f7"},
    {id:5, name: "Oil-3 liters can", price: 350, picture: "https://ibb.co/qgpy6f7"},
    {id:6, name: "Oil-2 liters can", price: 250, picture: "https://ibb.co/qgpy6f7"}
]
app.get('/', (req, res) =>{
    res.send('Connected with my server assignment qqq11sss test')
});
app.get('/products', (req, res)=>{
    res.send(products);
})
app.listen(port, ()=>{
    console.log('Listening to port', port);
})