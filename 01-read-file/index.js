const fs = require('fs');
const path = require('path');

const file = fs.createReadStream(path.resolve(__dirname, './text.txt'));

file.on('data', (e) => {
    console.log(e.toString())
})