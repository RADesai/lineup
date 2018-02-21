import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RosterModal from '../components/RosterModal'
import ReturnButton from './ReturnButton';
import '../assets/scss/ManageRosters.scss'

class ManageRosters extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRosters();
    }

    render() {
        return (
            <div className="manage-rosters">
                <RosterModal
                    roster={ this.props.editingRoster }
                    deleteRoster={ this.props.deleteRoster }
                    rosterDeleted={ this.props.rosterDeleted }
                    closeModal={ this.props.closeModal }
                />
                <ReturnButton selectPage={ this.props.selectPage } />
                <div className="row">
                    <div className="col-12 page-title">
                        Manage Rosters
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.rosters.map(roster => 
                            <div
                                key={ roster._id }
                                className="col-sm-12 col-md-4 col-lg-3"
                            >
                                <div
                                    className="roster-icon text-center"
                                    onClick={ () => this.props.displayModal(roster) }
                                    data-toggle="modal"
                                    data-target="#myModal"    
                                >
                                    <div className="edit-roster-icon">
                                        <i className="fas fa-basketball-ball"></i>
                                    </div>
                                    { roster.name }
                                    <div className="lineups-icon">
                                        Set Lineups
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <small className="text-muted">{ roster._id }</small>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        );
    }
}

ManageRosters.propTypes = {
    editingRoster: PropTypes.object,
    rosters: PropTypes.array,
    rosterDeleted: PropTypes.bool,
    displayModal: PropTypes.func,
    selectPage: PropTypes.func
}

export default ManageRosters