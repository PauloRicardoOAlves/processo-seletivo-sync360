function teste(req, res) {
    console.log("ok")
    return res.status(200).json({ mensagem: "deu certo!" })
}

module.exports = {
teste
}