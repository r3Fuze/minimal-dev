import uniqueRandom from "unique-random-array"

const data = require("./data/pokemon.json")

const getRandomItem = uniqueRandom(data)

/**
 * Return all names
 * @return {Array} Array of all the names
 */
export const all = () => data

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
