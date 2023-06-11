const fs = require('fs');
const snippetsFolder = './snippets';

fs.readdir(snippetsFolder, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  files.forEach(file => {
    const snippetPath = `${snippetsFolder}/${file}`;
    fs.readFile(snippetPath, 'utf8', (err, code) => {
      if (err) {
        console.error('Error:', err);
        return;
      }
      console.log(`Executing snippet: ${file}`);
      console.log('-----------------------------');
      try {
        eval(code);
      } catch (err) {
        console.error('Error:', err);
      }
      console.log('\n');
    });
  });
});
