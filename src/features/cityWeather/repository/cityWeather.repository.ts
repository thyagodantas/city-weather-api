import {openDB} from "../../../database";
import { CityWeatherDTO } from "../dto/cityWeather.dto";

export class CityWeatherRepository {
    async saveSearch(data: CityWeatherDTO, ipAddress: string): Promise<void> {
        const db = await openDB();
        const query = `
        INSERT INTO searches (cityName, country, temperature, description, ipAddress)
        VALUES (?, ?, ?, ?, ?)
      `;

        db.run(query, [data.cityName, data.country, data.temprature, data.description, ipAddress], (err: any) => {
            if (err) {
                console.error('Erro ao salvar a busca: ', err.message);
            }
        });
    }

    async getAllSearches(): Promise<CityWeatherDTO[]> {
        const db = await openDB();
        const query = `
            SELECT cityName, country, temperature, description, ipAddress, searchDate 
            FROM searches
        `;

        return (await db.prepare(query)).all();
    }
}