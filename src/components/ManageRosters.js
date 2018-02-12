import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <div className="container manage-rosters">
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
                                className="col-xs-12 col-md-4 col-lg-3"
                            >
                                <div className="roster-icon text-center">
                                    <div className="edit-roster-icon">
                                        <i className="fas fa-basketball-ball"></i>
                                    </div>
                                    { roster.name }
                                    <br />
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
    rosters: PropTypes.array,
    selectPage: PropTypes.func
}

export default ManageRosters