const express  = require('express')

module.exports = () => {
    const app = express()
    require('../app/routes/index.routes')(app)
    return app
}