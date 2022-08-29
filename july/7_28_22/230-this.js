const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// keyword this refers to the window object
// gets undefined undefined

// conclusion: keyword this behaves differently between arrow function and regular function 