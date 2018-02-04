const path = require('path');

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

    app.use('/api', router);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
}