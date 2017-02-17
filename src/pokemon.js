import uniqueRandom from "unique-random-array"

const data = require("./data/pokemon.json")

const getRandomItem = uniqueRandom(data)

/**
 * Return all names
 * @return {Array} Array of all the names
 */
export const all = () => data

/**
 * Get a random Pokémon name or multiple if 'count' is passed
 * @param  {Number} [count] The amount of names to generate
 * @throws Will throw an error if count is not a number
 * @return {String|Array}   A single name or Array of names if 'count' is passed
 */
export const random = count => {
    if (count === undefined) {
        return getRandomItem()
    } else {
        if (typeof count !== "number") {
            throw new Error("count must be a number")
        }

        let randomItems = []

        for (let i = 0; i < count; i++) {
            randomItems.push(getRandomItem())
        }

        return randomItems
    }
}

export {data}
