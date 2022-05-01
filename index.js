const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const products = [
    {id:1, name: "Oil-5 liters can", quantity: 10, supplier: "Rajesh ", description:"Product Descripton 1", price: 850, picture: "https://www.product-reviews.net/wp-content/uploads/2019/08/biscuits.jpg"},
    {id:2, name: "rice", quantity: 21, supplier: "Mahesh ", price: 950, description:"Product Descripton 6", picture: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr-500x500.png"},
    {id:3, name: "biscuites liters can", quantity: 11, supplier: "Bijoy ", description:"Product Descripton 2", price: 550, picture: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr-500x500.png"},
    {id:4, name: "Oil-4 liters can", quantity: 15, supplier: "Tinku ", description:"Product Descripton 3", price: 650, picture: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr-500x500.png"},
    {id:5, name: "Oil-3 liters can", quantity: 18, supplier: "Pintu ", description:"Product Descripton 4", price: 350, picture: "https://www.product-reviews.net/wp-content/uploads/2019/08/biscuits.jpg"},
    {id:6, name: "Oil-2 liters can", quantity: 19, supplier: "Sujit ", description:"Product Descripton 5", price: 250, picture: "https://5.imimg.com/data5/HQ/SB/MY-19588085/sunflower-oil-5ltr-500x500.png"}
]

// database connection code from mongodb

app.get('/product/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const product = products.find(u => u.id === id );
    res.send(product);
})
// product data add to server side post data
app.post('/product', (req, res) =>{
    console.log('request', req.body);
    res.send('post method success');
} )
app.get('/', (req, res) =>{
    res.send('Connected with my server assignment qqq11sss test')
});
app.get('/products', (req, res)=>{
    res.send(products);
});

app.listen(port, ()=>{
    console.log('Listening to port', port);
})