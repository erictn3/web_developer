const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

// Task is to create a variable named fullAddress that points to a string using the information from restaurant 
// you should point to a string that includes the address, city , state, and zipcode

const fullAddress = restaurant['address'] + restaurant.city + restaurant.state + restaurant.zipcode;

// used different examples of how to access object data with different syntax