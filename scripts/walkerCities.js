import { getWalkerCities, getCities } from "./database.js";
const walkercity = getWalkerCities()
const cities = getCities()

//define a function that will get all objects in the walkerCities array that are for the walker that was clicked on.
//It should return an array of all matching objects.

export const filteredWalkers = (walker) => {
    const assignments = []

    for (const city of walkercity) {
        if (city.walkerId === walker.id)
            assignments.push(city)
    }
    return assignments
}

//define a function that take in the array of matching objects from function above,
//and use the cityId property on each one to find the matching city name.
//It should return a string containing all the city names.


export const filteredCities = (assignments) => {
    let cityNames = ""

    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames} - ${city.name}`
            }
        }
    }
    cityNames += `.`
    return cityNames
}