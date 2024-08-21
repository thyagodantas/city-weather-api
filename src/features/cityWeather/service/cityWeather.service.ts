import axios from "axios";
import { CityWeatherDTO } from "../dto/cityWeather.dto";
import { CityWeatherRepository } from "../repository/cityWeather.repository";


export class CityWeatherService {

    constructor(private cityWeatherRepository: CityWeatherRepository) {}
    
    private readonly apiKey: string = 'YOUR_API_KEY';
    
    public async getCityWeather(cityName: string, country: string, ipAddress: string): Promise<CityWeatherDTO> {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: `${cityName},${country}`,
                appid: this.apiKey,
                units: 'metric'
            }
        });
        
        const { main, weather, name, sys } = response.data;

        const cityWeather: CityWeatherDTO = {
            cityName: name,
            country: sys.country,
            temprature: main.temp,
            description: weather[0].description
        };

        await this.cityWeatherRepository.saveSearch(cityWeather, ipAddress);

        return cityWeather;
        }

    }
