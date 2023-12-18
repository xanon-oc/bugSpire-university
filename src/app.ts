import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { notFound } from './app/middleware/notFound';
import router from './app/routes';
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

// not found route

app.use(notFound);

export default app;
