import React from 'react'
import PropTypes from 'prop-types';
import ReturnButton from './ReturnButton';
import CreateRosterForm from './CreateRosterForm';
import Roster from './Roster'
import AddPlayerForm from './AddPlayerForm';
import '../assets/scss/CreateRoster.scss'

const CreateRoster = props => {
    const {
        selectPage,
        roster,
        addPlayer,
        removePlayer,
        createRoster,
    } = props;

    return (
        <div className="create-roster">
            <ReturnButton selectPage={ selectPage } />
            <div className="row text-center">
                <div className="col-sm-12 page-title">
                    Create Roster
                </div>
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
                        removePlayer= { removePlayer }
                    />
                    <AddPlayerForm 
                        addPlayer={ addPlayer }
                    />
                </div>
            </div>
        </div>
    );
}

CreateRoster.propTypes = {
    roster: PropTypes.array,
    addPlayer: PropTypes.func,
    createRoster: PropTypes.func,
    removePlayer: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

export default CreateRoster