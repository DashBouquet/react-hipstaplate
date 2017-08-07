import * as express from 'express';
import * as next from 'next';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { schema } from './schema';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const APP_PORT = process.env.APP_PORT || 3000;

let server;

app
  .prepare()
  .then(() => {
    server = express();

    server.use('/graphql', bodyParser.json(), graphqlExpress({
      schema
    }));

    server.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql'
    }));

    server.all('*', (req, res) => handle(req, res));

    server.listen(APP_PORT, err => {
      if (err) throw err;
      console.log('> Environment:');
      console.log(`> > NODE_ENV=${process.env.NODE_ENV}`);
      console.log(`> Ready on http://localhost:${APP_PORT} ["test"]`);
    });
  });
