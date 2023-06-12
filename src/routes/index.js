const UserController = require('../controllers/UserController')

const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.status(200).send('Conectado')
})

routes.get('/users', UserController.list)
routes.post('/user', UserController.create)


module.exports = routes