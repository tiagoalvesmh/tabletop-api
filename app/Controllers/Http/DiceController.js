'use strict'
const Dice = use('App/Models/Dice')

class DiceController {
  async index ({ request, response, view }) {
    const { td4, td6, td8, td10, td12, td20 } = request.all()

    const roll = Dice.roll(td4, td6, td8, td10, td12, td20)

    return roll
  }


  async store ({ request, response }) {
  }


  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = DiceController
