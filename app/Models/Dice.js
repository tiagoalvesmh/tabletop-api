'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dice extends Model {
    static roll(dice, times) {
        const final = []
        
        for (var i=0; i<times; i++){
            const random = (Math.floor(Math.random() * dice)) + 1
            final.push(random)
        }

        return final
    }
}

module.exports = Dice
