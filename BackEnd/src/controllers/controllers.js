const knex = require('../database/connectioDatabase')

async function controller(req, res) {
    const { name, age, adress, adress2, city, state, bio } = req.body

    try {
       await knex("users").insert({ name, age, adress, adress2, city, state, bio })

        return res.status(201).json("Usuário cadastrado com sucesso ")

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    controller
}