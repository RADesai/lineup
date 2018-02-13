const PlayerModel = require('../models/PlayerModel.js');
const RosterModel = require('../models/RosterModel.js');

module.exports = {
    fetchPlayers: (req, res) => {
        PlayerModel.find((err, players) => {
            err
                ? res.status(500).send(err)
                : res.status(200).json(players);
        });
    },
    addPlayer: (req, res) => {
        let player = new PlayerModel();
        player.name = req.body.playerName;
        player.save(err => {
            err
            ? res
            .status(500)
            .send(err)
            : res.json("Player Created")
        });
    },
    removePlayer: (req, res) => {
        PlayerModel.findByIdAndRemove(req.params.id, err => {
            err
            ? res.status(500).send(err)
            : res.json({message: 'Successfully Deleted!'})
        })
    },
    deleteRoster: (req, res) => {
        RosterModel.findByIdAndRemove(req.params.id, err => {
            err
            ? res.status(500).send(err)
            : res.json(
                { id: req.params.id, message: 'Successfully Deleted!' })
        })
    },
    fetchRosters: (req, res) => {
        RosterModel.find((err, rosters) => {
            err
                ? res.status(500).send(err)
                : res.status(200).json(rosters);
        });
    },
    createRoster: (req, res) => {
        let roster = new RosterModel();
        roster.name = req.body.name;
        roster.players = req.body.roster;
        roster.save(err => {
            err
                ? res
                    .status(500)
                    .send(err)
                : res.json("Roster Created")
        });
    },
}