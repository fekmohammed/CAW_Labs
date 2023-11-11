                    //          1           //
// const fs = require('fs');
// if (process.argv.length !== 3) {
//   console.log('Usage: node exo4.js <text-to-be-saved>');
//   process.exit(1);
// }
// const textToBeSaved = process.argv[2];
// fs.writeFile('f.txt', textToBeSaved, (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('The file has been saved!');
//   }
// });


                    //         2           //


// const fs = require('fs');
// if (process.argv.length !== 3) {
//   console.log('Usage: node exo4.js <text-to-be-saved>');
//   process.exit(1);
// }
// const textToBeSaved = process.argv[2];
// const destinationFile = process.argv[2] + '.txt';
// fs.writeFile(destinationFile, textToBeSaved, (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('The file has been saved!');
//   }
// });


                    //         3           //

const fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage: node exo4.js <destination-file> <text-to-be-appended>');
  process.exit(1);
}
const destinationFile = process.argv[2];
const textToBeAppended = '\n' + process.argv[3];
fs.appendFile(destinationFile, textToBeAppended, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('The file has been updated!');
    fs.readFile(destinationFile, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
    } else {
      console.log('File contents:');
      console.log(data);
    }
  });
}
});
                    