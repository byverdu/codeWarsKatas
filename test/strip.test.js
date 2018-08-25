const { promisify } = require( 'util' );
const fs = require( 'fs' );
const readFile = promisify( fs.readFile );

const paths = [
  'src/components/Image/index.js'
];

const allPromises = paths.map(path => readFile(path, {encoding: 'utf-8'}));

Promise.all(allPromises)
  .then(resp => {
    resp.forEach((item, ind) => {
      const pattern = new RegExp("([\\t ]*\\/\\* ?test-code ?\\*\\/)[\\s\\S]*?(\\/\\* ?end-test-code ?\\*\\/[\\t ]*\\r?\\n?)", "g");
      const newData = String(item).replace(pattern, '\b\b');
      const path = paths[ind];

      fs.exists(path, exists => {
        if (!exists) {
          console.log('🤔🤔 Some of your paths doesn\'t exist 😕😕');
        }

        fs.writeFile(path, newData, (err) => {
          if(err) {
            console.log(err, '💣💣💣💣')
          }
          console.log('Code stripped 🤷‍🤷‍🤷‍')
        });
      });
    })
  });

