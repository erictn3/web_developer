const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the callback')
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
} catch (e) {
    console.log('something went wrong')
    console.log(e);
}


// console.log('i come after mkdir in the file') 