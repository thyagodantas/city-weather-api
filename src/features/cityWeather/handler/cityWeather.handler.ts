//cityWeatherController
import { Request, Response } from 'express';
import { CityWeatherService } from '../service/cityWeather.service';
import { CityWeatherRepository } from '../repository/cityWeather.repository';

export class CityWeatherHandler {
    private cityWeatherService: CityWeatherService;

    constructor() {
      const cityWeatherRepository = new CityWeatherRepository();
      this.cityWeatherService = new CityWeatherService(cityWeatherRepository);
    }

    public async getCityWeather(req: Request, res: Response): Promise<void> {
        const { cityName, country } = req.query;
        const ipAddress = req.ip || null;  // Captura o endereço IP do cliente

        //validar se os parametros foram passados
        if (!cityName || !country) {
            res.status(400).json({ error: 'Parâmetros inválidos' });
            return;
        }

        if (ipAddress === '' || ipAddress === null) {
            res.status(400).json({ error: 'Endereço IP inválido' });
            return;
        }

        try {
            this.cityWeatherService.getCityWeather(cityName.toString(), country.toString(), ipAddress?.toString())
            .then((cityWeather) => {
                res.status(200).json(cityWeather);
            }
            ).catch((error) => {
                res.status(500).json({ error: error.message });
            });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }

    }

}