import { getWalkers } from "./database.js"
import { filteredCities } from "./walkerCities.js"
import { filteredWalkers } from "./walkerCities.js"

//event listener passes a function as an argument,
//javascript code that "hears" when an event has been triggered or in this case "click"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filteredWalkers(walker)
                    const cities = filteredCities(assignments)
                    window.alert(`${walker.name} services: ${cities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()

//stores a variable containing html strings
//interates through walkers interpolates into html
//returns string
export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    
    return walkerHTML
}