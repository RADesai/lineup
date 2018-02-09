const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String
});

const PlayerModel = mongoose.model('PlayerModel', playerSchema);
module.exports = PlayerModel;