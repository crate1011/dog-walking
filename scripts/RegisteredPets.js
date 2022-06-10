import { getPets } from "./database.js"

const pets = getPets()

//stores a variable containing html strings
//interates through pets interpolates into html
//returns string
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

