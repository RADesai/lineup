import React from 'react'
import PropTypes from 'prop-types';
import '../assets/scss/RosterModal.scss'

const RosterModal = props => {
    const { roster, open } = props;
    return (
        <div className="modal fade" id="myModal" show={ open }>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">{ roster.name }</div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row text-center">
                                { roster.players.map(player =>
                                    <div key={ player._id } className="col-sm-12 player">
                                        <div className="text-center player-name">
                                            { player.name }
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <small className="text-muted">
                                        { roster._id }
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn">Save changes</button>
                        <button type="button" className="btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

RosterModal.propTypes = {
    roster: PropTypes.object
}

export default RosterModal