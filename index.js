const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
app.use(express.json())
const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    Image:String
  });
const product = mongoose.model('product', productSchema);
app.post('/products', async (req, res, next) => {
  const newproduct = new product({ 
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    Image: req.body.image 
});

    await newproduct.save();
    res.json(newproduct)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(()=>console.log("database connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://shamnaep0810:o9iwi6IcO1hIUz6i@shamna.gnthbv0.mongodb.net/?retryWrites=true&w=majority');
}