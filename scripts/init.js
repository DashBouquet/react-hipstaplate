const fs = require('fs');
const rimraf = require('rimraf');
const union = require('ramda').union;
const pages = require('./pages');
const client = require('./client');
const server = require('./server');

const createFiles = union(pages, client, server);

const removeFiles = [
  './.git',
  './app/pages/*',
  './app/modules/*',
  './app/components/*',
  './app/client/queries/*',
  './app/client/reducers.ts',
  './app/client/sagas.ts',
  './app/client/routes.ts',
  './app/server/queries/marvel.ts',
  './app/server/types/marvel.ts',
  './app/server/types/query.ts',
  './app/server/resolvers.ts',
  './app/server/schema.ts',
  './app/static/img/*'
];

removeFiles
  .map((path) => rimraf(path, fs, (err) => {
    if (err) throw err;
    console.log(`successfully deleted files by path: ${path}`);
  }));

createFiles
  .map((file) => fs.writeFile(file.path, file.content, (err) => {
    if (err) return console.log(err);
    console.log(`successfully created file: ${file.name}`);
  }));
