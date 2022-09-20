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
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    // categories: {
    //     type: [String],
    //     default: ['String']
    // } 
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log('HELLO HI HOWDY')
    console.log(`-from ${this.name}`)
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' })
    foundProduct.greet();
}

findProduct();

// const bike = new Product({ name: "Cycling Jersey", price: 28, categories: ['cycling'], size: 'S' });

// bike.save()
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('OH NO ERROR')
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('OH NO ERROR')
//         console.log(err)
//     })