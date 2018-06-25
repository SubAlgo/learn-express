module.exports = (app) => {
    const index = require('../controllers/index.controller')
    app.route('/').get(index.render)
}