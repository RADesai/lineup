import React from 'react'
import PropTypes from 'prop-types';
import Roster from './Roster'
import AddPlayerForm from './AddPlayerForm';
import CreateRosterForm from './CreateRosterForm';
import '../assets/scss/Manager.scss'

const Manager = props => {
    const {
        roster,
        addPlayer,
        removePlayer,
        createRoster,
    } = props;

    return (
        <div className="container manager">
            <div className="row text-center">
                <div className="col-sm-12 manager-title">
                    Create Roster
                </div>
            </div>
            <div className="row text-center roster">
                <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                    <CreateRosterForm 
                        createRoster={ createRoster }
                        roster={ roster }
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                    <Roster
                        roster={ roster }
                        addPlayer= { addPlayer }
                        removePlayer= { removePlayer }
                        createRoster= { createRoster }
                    />
                    <AddPlayerForm 
                        addPlayer={ addPlayer }
                    />
                </div>
            </div>
        </div>
    );
}

Manager.propTypes = {
    roster: PropTypes.array,
    addPlayer: PropTypes.func,
    createRoster: PropTypes.func,
    removePlayer: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

export default Manager