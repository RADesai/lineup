import React from 'react'
import PropTypes from 'prop-types';
import '../assets/scss/Roster.scss'

const Roster = props => {
    const {
        roster,
        removePlayer,
    } = props;

    return (
        <div className="roster-list">
            { roster
                ? roster.map((player, i) => <div key={ player._id || i } className="row roster-player">
                    <div className="col-sm-12 player-name">
                        <div className="text-left player-name">
                            { player.name }
                        </div>
                        <div className="text-right player-delete">
                            <span
                                onClick={ () => removePlayer(player) }
                                className="badge badge-player-delete">Remove</span>
                        </div>
                    </div>
                </div>)
                : null
            }
        </div>
    );
}

Roster.propTypes = {
    roster: PropTypes.array,
    removePlayer: PropTypes.func
}

export default Roster