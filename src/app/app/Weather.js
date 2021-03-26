export class Weather {

    constructor(city) {
        this.apikey = '54f11b1cfb10c147c8b253c4a5488db8';
        this.city = city;
    }

    async getWeather() {
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.apikey}c`
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
}