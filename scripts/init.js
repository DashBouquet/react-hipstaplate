const fs = require('fs');
const rimraf = require('rimraf');
const pages = require('./blank/pages');
const client = require('./blank/client');
const server = require('./blank/server');

const createFiles = pages.concat(client, server);

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

const remove = (path) => new Promise((resolve, reject) => {
  rimraf(path, fs, (err) => {
    if (err) reject(err);
    console.log(`successfully deleted files by path: ${path}`);
    resolve();
  });
});

const create = (file) => new Promise((resolve, reject) => {
  fs.writeFile(file.path, file.content, (err) => {
    if (err) reject(err);
    console.log(`successfully created file: ${file.name}`);
    resolve();
  });
});

Promise
  .all(removeFiles.map(path => remove(path)))
  .then(res => createFiles.map(file => create(file)))
  .catch(err => { throw err });
