const { formSchema } = require("../schemas/formSchema")

async function validationForm(req, res, next) {
    let {name, age, adress, adress2, city, state, bio} = req.body

    try {
        await formSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

module.exports = validationForm