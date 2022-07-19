// for (let i =0; i<=10;i++){
//     console.log(`i is: ${i}`)
//     for(let j=1;j<4;j++){
//         console.log(`     j is: ${j}`)
//     }
// }

const seatingChart = [
    ['kristen', 'erik', 'dave'],
    ['chris', 'derick', 'llave'],
    ['main', 'ike', 'mave'],
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}
// in row index 0, we go through each iteration of 0
// in row index 1, we go through each iteration of 1
// in row index 2, we go through each iteration of 2