const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
    name: String,
    players: [
        { name: String }
    ]
});

const RosterModel = mongoose.model('RosterModel', rosterSchema);
module.exports = RosterModel;