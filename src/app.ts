import express, { Application, Request, Response } from 'express';
import cityWeatherRouter from './features/cityWeather/index';

const app: Application = express();

app.use(express.json());

//Middleware rota cityWeather
app.use('/api/weather', cityWeatherRouter);

//Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: express.NextFunction) => {
    console.error(err.stack);
  res.status(500).json({ error: err.message });
});

export default app;