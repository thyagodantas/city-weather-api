//Rotas de cityWeather

import { Router } from "express";
import { CityWeatherHandler } from "./handler/cityWeather.handler";

const cityWeatherRouter = Router();
const cityWeatherHandler = new CityWeatherHandler();

//instanciar o controller

cityWeatherRouter.get('/', (req, res) => cityWeatherHandler.getCityWeather(req, res));


export default cityWeatherRouter;