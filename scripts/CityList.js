import { getCities } from "./database.js"
const cities = getCities()

//stores a variable containing html strings
//interates through cities interpolates into html
//returns string
export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

