import * as nextRoutes from 'next-routes';
const routes = module.exports = nextRoutes();

routes.add('hero', '/marvel/:id', 'marvel');
