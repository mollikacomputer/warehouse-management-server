const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const uri = "mongodb+srv://dbuser1:S7QV4BHrOQ981beK@cluster0.pgbec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const productCollection = client.db("asignment11").collection("product");
        app.get('/products', async(req, res)=>{
            const query ={};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        } )
        // post product add a new product
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('adding new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });
        // delet product from database and server
        app.delete('/product/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.deleteOne(query);
            res.send(result);
        })
        // update product
       /*  
        app.get('/product/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await productCollection.findOne(query);
            res.send(result);
        })
 */
    }finally{
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) =>{
    res.send('Connected with my server assignment qqq11sss test')
});

app.listen(port, ()=>{
    console.log('Listening to port', port);
})
