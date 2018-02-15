const path = require('path');
const controller = require('./controllers/controller.js');

const mongoose = require('mongoose');

const db_URI = process.env.NODE_ENV === 'production'
    ? `mongodb://${process.env.USER}:${process.env.PASS}@ds051543.mlab.com:51543/heroku_t3t29z55`
    : require('./mlab_credentials.js')

mongoose.connect(db_URI, {
    useMongoClient: true
}, (error) => {
    if (error) {
        console.log(`Failed to connect to ${db_URI}`);
    } else {
        console.log(`Connected to ${db_URI}`);
    }
});

module.exports = function (app, express) {
    const router = express.Router();

    router.route('/players')
        .get(controller.fetchPlayers)
        .post(controller.addPlayer);
        
    router.route('/rosters')
        .get(controller.fetchRosters)
        .post(controller.createRoster);

    router.route('/players/:id')
        .delete(controller.removePlayer);

    router.route('/rosters/:id')
        .delete(controller.deleteRoster);

    app.use('/api', router);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
}