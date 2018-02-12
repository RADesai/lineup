import React from 'react'
import PropTypes from 'prop-types';
import '../assets/scss/RosterModal.scss'

const getSuccessfulDeleteModalContent = closeModal =>
    <div onBlur={ () => closeModal() } className="modal-content">
        <div className="modal-header">
            <div className="modal-title">
                <div className="roster-deleted">Roster was successfully deleted!</div>
            </div>
            <button onClick={ () => closeModal() } type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle"></i>
            </button>
        </div>
    </div>

const RosterModal = props => {
    const { roster, deleteRoster, rosterDeleted, modalOpen, closeModal } = props;
    return (
        <div className="modal fade" id="myModal" show={ modalOpen }>
            <div className="modal-dialog" role="document">
            { rosterDeleted
                ? getSuccessfulDeleteModalContent(closeModal)
                : <div className="modal-content">
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
                        <button type="button" className="btn">Save Changes</button>
                        <button type="button" className="btn" data-dismiss="modal">Close</button>
                        <div onClick={ () => deleteRoster(roster._id) }>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
    );
}

RosterModal.propTypes = {
    roster: PropTypes.object,
    modalOpen: PropTypes.bool,
    rosterDeleted: PropTypes.bool,
    deleteRoster: PropTypes.func
}

export default RosterModal