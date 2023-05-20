// dependecies
const { program } = require('commander');

const generate = require('./src/generateModule/generate');

program.version('1.0.0');
program
  .command('create-module <name>')
  .description('Create a new module with routes and controller')
  .action((name) => {
    generate(name).then(console.log).catch(console.log);
});
program.parse(process.argv);