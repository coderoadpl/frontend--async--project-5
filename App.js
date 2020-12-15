const APPID = 'a798d078efa04620523b043cc93248e8'

class App {

    constructor() {
        this.query = 'Lublin,pl'

        this.init()
    }

    init() {
        this.fetchWeather()
    }

    fetchWeather() {
        return fetchData(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${APPID}&units=metric`)
            .then(console.log)
    }

    render() {
        const container = document.createElement('div')

        const button = new Button('Fetch weather', () => this.fetchWeather())

        container.appendChild(button.render())

        return container
    }

}