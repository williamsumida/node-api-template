import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');

      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      );

      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, content-type, Accept'
      );

      res.setHeader('Access-Control-Allow-Credentials', true);

      next();
    });
  }

  routes() {
    this.server.use('/api-hub', routes);
  }
}

export default new App().server;
