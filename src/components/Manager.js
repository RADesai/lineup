import React from 'react'
import PropTypes from 'prop-types';
import CreateRoster from './CreateRoster';
import ManageRosters from './ManageRosters';
import '../assets/scss/Manager.scss'

const getPageOptions = selectPage =>
    <div className="row text-center manager">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div
                className="select-page mx-auto"
                onClick={ () => selectPage('CREATE_ROSTER') }
            >
                <div className="select-page-icon">
                    <i className="far fa-address-book"></i>
                </div>
                Create Roster
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div
                className="select-page mx-auto"
                onClick={ () => selectPage('MANAGE_ROSTERS') }
            >
                <div className="select-page-icon">
                    <i className="fas fa-basketball-ball"></i>
                </div>
                Manage Rosters
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="select-page mx-auto">
                <div className="select-page-icon">
                    <i className="fas fa-users"></i>
                </div>
                Set Lineups
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="select-page mx-auto">
                <div className="select-page-icon">
                    <i className="fas fa-th-list"></i>
                </div>
                Something Else?
            </div>
        </div>
    </div>

const getCreateRoster = (selectPage, roster, addPlayer, removePlayer, createRoster) =>
    <CreateRoster
        selectPage={ selectPage }
        roster={ roster }
        addPlayer={ addPlayer }
        removePlayer={ removePlayer }
        createRoster={ createRoster }
    />

const getManageRosters = (fetchRosters, selectPage, rosters) => {
    return (
        <ManageRosters
            selectPage={ selectPage }
            rosters={ rosters }
            fetchRosters={ fetchRosters }
        />
    );
}

const Manager = props => {
    const {
        selectPage,
        roster,
        rosters,
        fetchRosters,
        addPlayer,
        removePlayer,
        createRoster,
        selectedPage,
    } = props;

    const pages = {
        MANAGER: getPageOptions(selectPage),
        CREATE_ROSTER: getCreateRoster(selectPage, roster, addPlayer, removePlayer, createRoster),
        MANAGE_ROSTERS: getManageRosters(fetchRosters, selectPage, rosters)
    }

    return (
        <div className="container manager">
            { pages[selectedPage] || null }
        </div>
    );
}

Manager.propTypes = {
    roster: PropTypes.array,
    rosters: PropTypes.array,
    selectPage: PropTypes.func,
    addPlayer: PropTypes.func,
    fetchRosters: PropTypes.func,
    createRoster: PropTypes.func,
    removePlayer: PropTypes.func,
    handleSubmit: PropTypes.func,
    selectedPage: PropTypes.string,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

export default Manager