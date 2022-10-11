const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    const c = new Campground({ title: 'purple field' });
    await c.save();
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://images.unsplash.com/photo-1436712702142-096ca31693c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHw0ODQzNTF8fHx8fHx8MTY2NTUzMjQ2Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
            description: "this is the description my good sir this is the description my good sirthis is the description my good sirthis is the description my good sir",
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

