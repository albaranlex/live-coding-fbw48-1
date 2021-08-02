const fs = require('fs');
const newFolder = process.argv[2] || 'New Project';

try {
    fs.mkdirSync(newFolder);
    fs.writeFileSync(`${newFolder}/index.html`, '');
    fs.writeFileSync(`${newFolder}/styles.css`, '');
    fs.writeFileSync(`${newFolder}/script.js`, '');
} catch(e) {
    console.log("Something Went Wrong!")
    console.log(e)
}