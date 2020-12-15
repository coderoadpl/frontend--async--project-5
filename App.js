const APPID = 'a798d078efa04620523b043cc93248e8'
const query = 'Lublin,pl'

class App {

    constructor() {
        this.init()
    }

    init() {
        fetchData(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${APPID}&units=metric`)
            .then(console.log)
    }

    render() {
        const container = document.createElement('div')

        return container
    }

}