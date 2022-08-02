// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
//     city: 'San Francisco',
//     state: 'California'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, firstName, lastName, city, bio } = user;

// const {born: birthYear, death: died} = user
// turns old category to new  

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { city, state, died = 'N/A' } = user2;
const { city, state, died: deathYear = 'N/A' } = user2;
