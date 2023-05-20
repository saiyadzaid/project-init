
const generate = require('./src/generateModule/generate');

const moduleName = 'product';
generate(moduleName)
.then(console.log)
.catch(console.log);