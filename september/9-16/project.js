const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: "Mountain Bike", price: 'hello!' });

bike.save()
    .then(data => {
        console.log('IT WORKED')
        console.log(data)
    })
    .catch(err => {
        console.log('OH NO ERROR')
        console.log(err)
    })