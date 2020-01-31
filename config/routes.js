module.exports = app => {
    app.get('/stocks', app.api.stocks.get)
}