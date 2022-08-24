const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the callback')
//     if (err) throw err;
// });

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/styles.css`, '')
fs.writeFileSync(`${folderName}/app.js`, '')

// console.log('i come after mkdir in the file') 