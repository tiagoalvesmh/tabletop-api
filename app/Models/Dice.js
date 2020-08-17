'use strict'

const Model = use('Model')

class Dice extends Model {
    static roll(td4, td6, td8, td10, td12, td20) {
        const final = []
        var random = {}
        var count = 0
        
        if(td4 > 0){
            for (var i=0; i<td4; i++){
                random = (Math.floor(Math.random() * 4)) + 1
                final.push({
                    "d4": random
                })
            }
        }

        if(td6 > 0){
            for (var i=0; i<td6; i++){
                random = (Math.floor(Math.random() * 6)) + 1
                final.push({
                    "d6": random
                })
            }
        }

        if(td8 > 0){
            for (var i=0; i<td8; i++){
                random = (Math.floor(Math.random() * 8)) + 1
                final.push({
                    "d8": random
                })                
            }
        }

        if(td10 > 0){
            for (var i=0; i<td10; i++){
                random = (Math.floor(Math.random() * 10)) + 1
                final.push({
                    "d10": random
                })
            }
        }

        if(td12 > 0){
            for (var i=0; i<td12; i++){
                random = (Math.floor(Math.random() * 12)) + 1
                final.push({
                    "d12": random
                })
            }
        }

        if(td20 > 0){
            for (var i=0; i<td20; i++){
                random = (Math.floor(Math.random() * 20)) + 1
                final.push({
                    "d20": random
                })
            }
        }

        return final
    }
}

module.exports = Dice
