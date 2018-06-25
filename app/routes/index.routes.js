module.exports = (app) => {
    const index = require('../controllers/index.controller')
    //app.get('/', index.render)
    app.route('/').get(index.render)
}