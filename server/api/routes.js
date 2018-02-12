const path = require('path');
const controller = require('./controllers/controller.js');

const mongoose = require('mongoose');
const db = 'mongodb://localhost/dev_lineup';

mongoose.connect(db, {
    useMongoClient: true
}, (error) => {
    if (error) {
        console.log(`Failed to connect to ${db}`);
    } else {
        console.log(`Connected to ${db}`);
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