// copied over or 'spread' into new object 

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };

// copying objects using spread, if there is a similar key, the latest addition will takeover the value for that key 

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 1234, isAdmin: true }