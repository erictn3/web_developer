// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log('meow meow meow')
//     }
// }

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says meow`);
    }
}

// key word THIS refers to object

const meow2 = cat.meow;

// 