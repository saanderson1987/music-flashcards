const fs = require('fs');
//
// const files = fs.readdirSync('./public/images/flashcards');
// const numFiles = files.length;
// Math.floor(Math.random(files.length);


// const pngs = [];
// for (let i = 0; i < files.length; i++) {
//   const filename = files[i];
//   if (filename.slice(filename.length - 3) !== 'png' ) fs.unlinkSync('./public/images/flashcards/' + filename);
// }

fs.copyFileSync('test.txt', '../public/images/test.txt');
