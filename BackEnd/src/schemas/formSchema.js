const joi = require('joi')

const formSchema = joi.object({
    name: joi.string().required().messages({
        "any.required": "Preencha o campo NOME nome para prosseguir",
        "string.empty": "O campo NOME não pode ficar em branco"
    }),
    age: joi.number().positive().required().messages({
        "any.required": "O campo IDADE é obrigatório!",
        "number.base": "O campo IDADE é obrigatório!",
        "number.positive": "O campo IDADE deve ser maior que zero!"
    }),
    adress: joi.string().required().messages({
        "any.required": "Preencha o campo ENDEREÇO nome para prosseguir",
        "string.empty": "O campo ENDEREÇO é obrigatório!"
    }),
    adress2: joi.string().required().messages({
        "any.required": "Preencha o campo BAIRRO nome para prosseguir",
        "string.empty": "O campo BAIRRO é obrigatório!"
    }),
    city: joi.string().required().messages({
        "any.required": "Preencha o campo CIDADE nome para prosseguir",
        "string.empty": "O campo CIDADE é obrigatório!"
    }),
    state: joi.string().required().messages({
        "any.required": "Preencha o campo ESTADO nome para prosseguir",
        "string.empty": "O campo ESTADO é obrigatório!"
    }),
    bio: joi.string().required().messages({
        "any.required": "Preencha o campo BIO nome para prosseguir",
        "string.empty": "O campo BIO é obrigatório!"
    }),
})

module.exports = {
    formSchema
}