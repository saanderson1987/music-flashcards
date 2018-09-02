const fs = require('fs');

const files = fs.readdirSync('../flashcards');

// console.log(files);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  if (file.slice(file.length -3) === 'png') {
    // fs.access('../flashcards/' + file, (err) => {
    //   if (err) {
    //     if (err.code === 'ENOENT') {
    //       console.error('myfile does not exist');
    //       return;
    //     }
    //
    //     throw err;
    //   }
    //   console.log('myfile exists');
    // });
    fs.copyFileSync('../flashcards/' + file, '../public/images/flashcards/' + file);
  }
}
