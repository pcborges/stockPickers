module.exports = app => {
    const get = (req, res) => {
        res.status(200).send('Requisição ok')
    }

    return { get }
}