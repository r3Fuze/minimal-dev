import {describe} from "ava-spec"
import {expect} from "chai"

import * as pokemon from "../src/pokemon"

describe("Pokemon module", it => {
    it("should have some data", () => {
        expect(pokemon.data).to.exist
    })

    describe(".all()", it => {
        it("should be an Array", () => {
            expect(pokemon.all()).to.be.an("array")
            expect(pokemon.all()).to.not.be.empty
        })

        it("should contain 'Charmander'", () => {
            expect(pokemon.all()).to.include("Charmander")
        })
    })

    describe(".random()", it => {
        it("should return a string", () => {
            let randomName = pokemon.random()
            expect(randomName).to.be.a("string")
            expect(randomName).to.not.be.empty
        })

        it("should return a random name from the list", () => {
            let randomName = pokemon.random()
            expect(pokemon.data).to.include(randomName)
        })

        it("should return a list of names if passed a number", () => {
            let randomNames = pokemon.random(3)
            expect(randomNames).to.be.an("array")
            expect(randomNames).to.not.be.empty
            expect(randomNames).to.have.lengthOf(3)

            randomNames.forEach(name => {
                expect(pokemon.data).to.include(name)
            })
        })

        it("should throw an error if passed something other than a number", () => {
            let fn = () => pokemon.random("should error")
            expect(fn).to.throw(/must be a number/)
        })
    })
})
