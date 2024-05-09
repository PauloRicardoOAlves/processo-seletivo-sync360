function teste(req, res) {
    console.log(req.body)
    return res.status(200).json("ok")
}

module.exports = {
    teste
}